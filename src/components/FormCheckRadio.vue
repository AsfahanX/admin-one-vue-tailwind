<script
  setup
  lang="ts"
  generic="M extends string | number| boolean | ArrayLike<any>"
>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    name: string;
    type?: "checkbox" | "radio" | "switch";
    label?: string;
    modelValue?: M;
    inputValue: M extends ArrayLike<infer T> ? T : M;
  }>(),
  {
    type: "checkbox",
    label: undefined,
    modelValue: undefined,
    inputValue: undefined,
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
