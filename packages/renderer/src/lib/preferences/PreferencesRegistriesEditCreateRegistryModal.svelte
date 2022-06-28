<script lang="ts">
import type { Registry } from '@tmpwip/extension-api';
import { onMount } from 'svelte';

export let toggleCallback: () => void;
export let mode: 'edit' | 'create';

export let registry: Registry = {
  source: '',
  serverUrl: '',
  username: '',
  secret: '',
};

let providerSourceNames: string[] = [];

onMount(async () => {
  providerSourceNames = await window.getImageRegistryProviderNames();
  if (providerSourceNames.length > 0) {
    registry.source = providerSourceNames[0];
  }
});

function keydownChoice(e: KeyboardEvent) {
  e.stopPropagation();
  if (e.key === 'Escape') {
    toggleCallback();
  }
}

let isServerUrlInvalid;
if (mode === 'create') {
  isServerUrlInvalid = 'Enter a value';
}
function checkServerValue(event: any) {
  const userValue = event.target.value;
  if (userValue === '' || userValue === undefined) {
    isServerUrlInvalid = 'Please enter a value';
  } else {
    isServerUrlInvalid = '';
  }
}

let isUsernameInvalid;
if (mode === 'create') {
  isUsernameInvalid = 'Enter a value';
}

function checkUsernameValue(event: any) {
  const userValue = event.target.value;
  if (userValue === '' || userValue === undefined) {
    isUsernameInvalid = 'Please enter a value';
  } else {
    isUsernameInvalid = '';
  }
}

let isPasswordInvalid;
if (mode === 'create') {
  isPasswordInvalid = 'Enter a value';
}
function checkPasswordValue(event: any) {
  const userValue = event.target.value;
  if (userValue === '' || userValue === undefined) {
    isPasswordInvalid = 'Please enter a value';
  } else {
    isPasswordInvalid = '';
  }
}

let creationError = '';

async function createOrUpdateRegistry() {
  creationError = '';
  if (mode === 'create') {
    try {
      await window.createImageRegistry(registry.source, registry);
      toggleCallback();
    } catch (error) {
      creationError = error;
    }
  } else {
    try {
      await window.updateImageRegistry(registry.source, registry);
      toggleCallback();
    } catch (error) {
      creationError = error;
    }
  }
}
</script>

<div class="pf-l-bullseye">
  <div
    class="pf-c-modal-box pf-m-sm modal z-50 "
    tabindex="{0}"
    autofocus
    aria-modal="true"
    on:keydown="{keydownChoice}"
    aria-labelledby="modal-title-modal-basic-example-modal"
    aria-describedby="modal-description-modal-basic-example-modal">
    <button class="pf-c-button pf-m-plain" type="button" aria-label="Close dialog" on:click="{() => toggleCallback()}">
      <i class="fas fa-times" aria-hidden="true"></i>
    </button>
    <header class="pf-c-modal-box__header" on:keydown="{keydownChoice}">
      <h1 class="pf-c-modal-box__title">{mode === 'create' ? 'Add a new registry' : 'Edit'}</h1>
    </header>
    <div class="pf-c-modal-box__body">
      <form novalidate class="pf-c-form pf-m-horizontal-on-sm">
        <div class="pf-c-form__group">
          <div class="pf-c-form__group-label">
            <label class="pf-c-form__label" for="form-horizontal-custom-breakpoint-name">
              <span class="pf-c-form__label-text">Server URL:</span>
              {#if mode === 'create'}
                <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
              {/if}
            </label>
          </div>
          <div class="pf-c-form__group-control pf-u-min-height">
            <input
              class="pf-c-form-control"
              type="text"
              name="serverUrl"
              readonly="{mode === 'edit'}"
              on:input="{event => checkServerValue(event)}"
              bind:value="{registry.serverUrl}"
              aria-invalid="{!!isServerUrlInvalid}"
              required />
            {#if isServerUrlInvalid}
              <p class="pf-c-form__helper-text pf-m-error" id="form-help-text-address-helper" aria-live="polite">
                {isServerUrlInvalid}
              </p>
            {/if}
          </div>
        </div>
        <div class="pf-c-form__group">
          <div class="pf-c-form__group-label">
            <label class="pf-c-form__label" for="form-horizontal-custom-breakpoint-name">
              <span class="pf-c-form__label-text">Username:</span>
              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
            </label>
          </div>
          <div class="pf-c-form__group-control pf-u-min-height">
            <input
              class="pf-c-form-control"
              type="text"
              bind:value="{registry.username}"
              on:input="{event => checkUsernameValue(event)}"
              aria-invalid="{!!isUsernameInvalid}"
              name="username"
              required />
            {#if isUsernameInvalid}
              <p class="pf-c-form__helper-text pf-m-error" id="form-help-text-address-helper" aria-live="polite">
                {isUsernameInvalid}
              </p>
            {/if}
          </div>
        </div>
        <div class="pf-c-form__group">
          <div class="pf-c-form__group-label">
            <label class="pf-c-form__label" for="form-horizontal-custom-breakpoint-name">
              <span class="pf-c-form__label-text">Password:</span>
              <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
            </label>
          </div>
          <div class="pf-c-form__group-control pf-u-min-height">
            <input
              class="pf-c-form-control"
              type="password"
              bind:value="{registry.secret}"
              on:input="{event => checkPasswordValue(event)}"
              aria-invalid="{!!isPasswordInvalid}"
              name="password"
              required />
            {#if isPasswordInvalid}
              <p class="pf-c-form__helper-text pf-m-error" id="form-help-text-address-helper" aria-live="polite">
                {isPasswordInvalid}
              </p>
            {/if}
          </div>
        </div>
        {#if providerSourceNames.length > 1}
          <div class="pf-c-form__group">
            <div class="pf-c-form__group-label">
              <label class="pf-c-form__label" for="form-horizontal-custom-breakpoint-name">
                <span class="pf-c-form__label-text">Provider:</span>
                <span class="pf-c-form__label-required" aria-hidden="true">&#42;</span>
              </label>
            </div>
            <div class="pf-c-form__group-control">
              <select
                class="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                name="providerChoice"
                bind:value="{registry.source}">
                {#each providerSourceNames as providerSourceName}
                  <option value="{providerSourceName}">{providerSourceName}</option>
                {/each}
              </select>
            </div>
          </div>
        {/if}
        {#if providerSourceNames.length == 1}
          <input type="hidden" name="source" readonly bind:value="{registry.source}" />
        {/if}
      </form>
    </div>
    <footer class="pf-c-modal-box__footer">
      <div class="w-full flex flex-col justify-end">
        <button
          class="pf-c-button pf-m-primary"
          disabled="{!!isServerUrlInvalid || !!isUsernameInvalid || !!isPasswordInvalid}"
          type="button"
          on:click="{() => createOrUpdateRegistry()}">{mode === 'create' ? 'Add registry' : 'Update registry'}</button>
        {#if creationError}
          <p class="pf-c-form__helper-text pf-m-error" id="form-help-text-address-helper" aria-live="polite">
            {creationError}
          </p>
        {/if}
      </div>
    </footer>
  </div>
</div>