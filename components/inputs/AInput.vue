<script setup lang="ts">

const emits = defineEmits(["update:modelValue"]);

const props = withDefaults(defineProps<{
  modelValue: string | number | null | undefined,
  id: string,
  name?: string,
  type?: string,
  placeholder?: string,
  disabled?: boolean
}>(), {
  name: undefined,
  type: "text",
  placeholder: undefined
});

const internalValue = ref<string | number | null | undefined>(props.modelValue);

watch(() => props.modelValue, (val) => {
  internalValue.value = val;
});

watch(internalValue, (val) => {
  emits("update:modelValue", val);
});

const classes = computed(() => {
  if (props.disabled) {
    return "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6";
  }

  return "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
});

</script>

<template>
  <div class="relative mt-2 rounded-md shadow-sm">
    <input
      :id="id"
      v-model="internalValue"
      :class="classes"
      :type="type"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder">
    <p id="email-error" class="mt-2 text-sm text-red-600">
      Not a valid email address.
    </p>
  </div>
</template>
