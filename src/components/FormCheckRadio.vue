<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    type?: "checkbox" | "radio" | "switch";
    label?: string;
    modelValue?: unknown[] | string | number | boolean;
    inputValue: string | number | boolean;
  }>(),
  {
    type: "checkbox",
    label: undefined,
    modelValue: undefined,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
}>();

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const inputType = computed(() =>
  props.type === "radio" ? "radio" : "checkbox"
);
</script>

<template>
  <label :class="type">
    <input
      v-model="computedValue"
      :type="inputType"
      :name="name"
      :value="inputValue"
    />
    <span class="check" />
    <span class="pl-2">{{ label }}</span>
  </label>
</template>
