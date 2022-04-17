/**********************************************************************
 * Copyright (C) 2022 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import type { ProviderConnectionStatus, ProviderStatus } from '@tmpwip/extension-api';
import { ipcRenderer } from 'electron';
import type { ProviderContainerConnectionInfo, ProviderInfo } from './api/provider-info';
import type { MenuItem } from './api/tray-menu-info';
import type { CommandRegistry } from './command-registry';
import type { ProviderRegistry } from './provider-registry';
import { Disposable } from './types/disposable';

export interface TrayProviderConnectionInfo {
  name: string;
  status: ProviderConnectionStatus;
}

export interface TrayProviderInfo {
  name: string;
  status: ProviderStatus;
}

export class TrayMenuRegistry {
  private menuItems = new Map<string, MenuItem>();
  private providers = new Map<string, ProviderInfo>();
  constructor(private readonly commandRegistry: CommandRegistry, readonly providerRegistry: ProviderRegistry) {
    // add as listener
    providerRegistry.addProviderListener((name: string, providerInfo: ProviderInfo) => {
      if (name === 'provider:create') {
        this.providers.set(providerInfo.internalId, providerInfo);
      } else if (name === 'provider:delete') {
        this.providers.delete(providerInfo.internalId);
      }
      if (name === 'provider:update-status') {
        ipcRenderer.send('tray:provider', 'update', providerInfo);
      }

      //this.registerProvider(provider.name, provider.);
    });
    providerRegistry.addProviderLifecycleListener((name: string, provider: ProviderInfo) => {
      this.registerProvider(provider);
    });

    providerRegistry.addProviderContainerConnectionLifecycleListener(
      (name: string, providerInfo: ProviderInfo, containerProviderConnectionInfo: ProviderContainerConnectionInfo) => {
        // notify tray menu registry
        if (name === 'provider-container-connection:register') {
          ipcRenderer.send('tray:container-provider-connection', 'add', providerInfo, containerProviderConnectionInfo);
        }
        if (name === 'provider-container-connection:unregister') {
          ipcRenderer.send(
            'tray:container-provider-connection',
            'delete',
            providerInfo,
            containerProviderConnectionInfo,
          );
        }
        if (name === 'provider-container-connection:update-status') {
          ipcRenderer.send(
            'tray:container-provider-connection',
            'update',
            providerInfo,
            containerProviderConnectionInfo,
          );
        }
      },
    );

    ipcRenderer.on('tray:menu-item-click', (_, menuItemId: string) => {
      try {
        this.commandRegistry.executeCommand(menuItemId);
      } catch (err) {
        console.error(err);
      }
    });

    ipcRenderer.on('tray:menu-provider-click', (_, param: { action: string; providerInfo: ProviderInfo }) => {
      const provider = this.providers.get(param.providerInfo.internalId);
      if (provider) {
        if (param.action === 'Start') {
          providerRegistry.startProviderLifecycle(param.providerInfo.internalId);
        } else if (param.action === 'Stop') {
          providerRegistry.stopProviderLifecycle(param.providerInfo.internalId);
        }
      }
    });

    ipcRenderer.on(
      'tray:menu-provider-container-connection-click',
      async (
        _,
        param: {
          action: string;
          providerInfo: ProviderInfo;
          providerContainerConnectionInfo: ProviderContainerConnectionInfo;
        },
      ) => {
        const provider = this.providers.get(param.providerInfo.internalId);
        if (provider) {
          if (param.action === 'Start') {
            try {
              await providerRegistry.startProviderConnection(
                param.providerInfo.internalId,
                param.providerContainerConnectionInfo,
              );
            } catch (err) {
              ipcRenderer.send('dialog:show-error', {
                title: `Error while starting ${param.providerContainerConnectionInfo.name}`,
                body: '' + err,
              });
            }
          } else if (param.action === 'Stop') {
            try {
              await providerRegistry.stopProviderConnection(
                param.providerInfo.internalId,
                param.providerContainerConnectionInfo,
              );
            } catch (err) {
              ipcRenderer.send('dialog:show-error', {
                title: `Error while stopping ${param.providerContainerConnectionInfo.name}`,
                body: '' + err,
              });
            }
          }
        }
      },
    );
  }

  registerMenuItem(providerName: string, menuItem: MenuItem): Disposable {
    this.menuItems.set(menuItem.id, menuItem);
    ipcRenderer.send('tray:add-menu-item', { providerName, menuItem });
    return Disposable.create(() => {
      this.menuItems.delete(menuItem.id);
      // TODO: notify main
    });
  }

  registerProvider(providerInfo: ProviderInfo): void {
    ipcRenderer.send('tray:provider', 'add', providerInfo);
  }

  unregisterProvider(providerInfo: ProviderInfo) {
    ipcRenderer.send('tray:provider', 'delete', providerInfo);
  }
}