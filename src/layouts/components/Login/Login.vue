<script setup>
import { Dialog, DialogPanel, DialogTitle, DialogDescription } from '@headlessui/vue';
const props = defineProps({ isOpen: Boolean, setIsOpen: Function });
</script>

<template>
  <Dialog :open="isOpen" @close="setIsOpen" class="relative z-50">
    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel class="w-full max-w-sm rounded-lg bg-first-color-alt-c p-6">
        <DialogTitle class="text-2xl font-bold text-center mb-4"
          >SIGN <span class="text-yellow-color-c">IN</span></DialogTitle
        >
        <div class="flex flex-col gap-2 justify-center">
          <div class="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Username or email"
              class="w-full text-xs bg-first-color-c px-3 py-2 rounded-sm outline-none outline-[1px] hover:outline hover:outline-text-color-light-c"
            />
            <input
              type="text"
              placeholder="Your passwords"
              class="w-full text-xs bg-first-color-c px-3 py-2 rounded-sm outline-none outline-[1px] hover:outline hover:outline-text-color-light-c"
            />
          </div>
          <a href="#" class="hover:text-yellow-color-c text-xs text-text-color-light-c text-center">Forgot Password</a>
          <button
            type="button"
            class="w-full bg-yellow-color-c rounded-md px-3 py-2 text-first-color-alt-c text-sm font-bold"
          >
            Login
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>
