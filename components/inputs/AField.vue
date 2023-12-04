<script setup lang="ts">

const props = defineProps<{
  for: string,
  label?: string,
  helpText?: string
}>();

const forId = computed(() => props.for);

</script>

<template>
  <div>
    <label v-if="label"
           class="block text-sm font-medium leading-6 text-gray-900"
           :for="forId">
      {{ label }}
    </label>
    <div class="mt-2">
      <slot/>
    </div>
    <p
        v-if="helpText"
        class="mt-2 text-sm text-gray-500">
      {{ helpText }}
    </p>
  </div>
</template>

<style scoped>

</style>
