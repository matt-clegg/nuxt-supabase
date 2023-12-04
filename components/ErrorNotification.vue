<script setup lang="ts">
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import { XMarkIcon } from "@heroicons/vue/20/solid";

const errorState = useState<Error[]>("error");

const show = computed(() => errorState.value?.length);

async function onClose (index: number) {
  errorState.value.splice(index, 1);
  await clearError();
}

</script>

<template>
  <div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6">
    <transition-group
      tag="div"
      class="flex w-full flex-col items-center space-y-4 sm:items-end relative"
      name="errors">
      <template
        v-for="(error, index) in errorState"
        :key="index">
        <div
          v-if="show"
          class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <ExclamationTriangleIcon class="h-6 w-6 text-red-400" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  An error occured
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ error.message }}
                </p>
              </div>
              <div class="ml-4 flex flex-shrink-0">
                <button
                  type="button"
                  class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="() => onClose(index)">
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </transition-group>
  </div>
</template>

<style scoped>
.errors-move,
.errors-enter-active,
.errors-leave-active {
  transition: all .2s cubic-bezier(0.55, 0, 0.1, 1);
}

.errors-enter-from,
.errors-leave-to {
  opacity: 0;
  transform: translate(30px, 0);
}

.errors-leave-active {
  position: absolute;
}
</style>
