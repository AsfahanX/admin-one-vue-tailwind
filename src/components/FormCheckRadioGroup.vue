<script setup lang="ts" generic="M extends string | number">
import { computed } from "vue";
import FormCheckRadio from "@/components/FormCheckRadio.vue";

const props = withDefaults(
  defineProps<{
    options: Record<M, string>;
    name: string;
    type?: "checkbox" | "radio" | "switch";
    componentClass?: string;
    isColumn?: boolean;
    modelValue?: M | M[];
  }>(),
  {
    type: "checkbox",
    componentClass: undefined,
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
</script>

<template>
  <div
    class="flex justify-start flex-wrap -mb-3"
    :class="{ 'flex-col': isColumn }"
  >
    <FormCheckRadio
      v-for="(value, key) in options"
      :key="key"
      v-model="computedValue"
      :type="type"
      :name="name"
      :input-value="(key as unknown as M)"
      :label="value"
      :class="componentClass"
      class="mr-6 mb-3 last:mr-0"
    />
  </div>
</template>
