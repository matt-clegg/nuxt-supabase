<script setup lang="ts">

export type ButtonStyle =
    "primary" |
    "secondary" |
    "info";

export type ButtonSize = "sm" | "md" | "lg";

const props = withDefaults(defineProps<{
  type?: "button" | "submit",
  style?: ButtonStyle,
  size?: ButtonSize,
  href?: string,
  to?: string
}>(), {
  type: "button",
  style: "primary",
  size: "md",
  href: undefined,
  to: undefined
});

const styleClasses = computed(() => {
  const result = ["font-semibold shadow-sm "];

  if (props.style === "primary") {
    result.push("text-white bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-500 focus-visible:outline-indigo-600");
  } else if (props.style === "secondary") {
    result.push("text-gray-900 bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50");
  }

  return result;
});

const sizeClasses = computed(() => {
  if (props.size === "sm") {
    return "rounded px-2 py-1 text-xs";
  } else if (props.size === "md") {
    return "rounded-md px-2.5 py-1.5 text-sm";
  } else if (props.size === "lg") {
    return "rounded-md px-3.5 py-2.5 text-sm";
  }
});

</script>

<template>
  <nuxt-link
    v-if="href || to"
    :to="href || to"
    :class="[sizeClasses, styleClasses]">
    <slot />
  </nuxt-link>
  <button
    v-else
    :type="type"
    :class="[sizeClasses, styleClasses]">
    <slot />
  </button>
</template>

<style scoped>

</style>
