<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import { useMainStore } from "@/stores/main";
import FormControlIcon from "@/components/FormControlIcon.vue";
import type { InputHTMLAttributes } from "vue";

type OptionItem = { id: number | string; label: string };

const props = withDefaults(
  defineProps<{
    name?: string;
    id?: string;
    autocomplete?: string;
    maxlength?: string;
    placeholder?: string;
    inputmode?: InputHTMLAttributes["inputmode"];
    icon?: string;
    options?: string[] | OptionItem[];
    type?: InputHTMLAttributes["type"];
    modelValue?:
      | string
      | number
      | boolean
      | unknown[]
      | Record<string, unknown>;
    required?: boolean;
    borderless?: boolean;
    transparent?: boolean;
    ctrlKFocus?: boolean;
  }>(),
  {
    name: undefined,
    id: undefined,
    autocomplete: undefined,
    maxlength: undefined,
    placeholder: undefined,
    inputmode: undefined,
    icon: undefined,
    options: undefined,
    type: "text",
    modelValue: "",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
  (e: "setRef", value: HTMLElement | null): void;
}>();

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const textAreaValue = computed({
  get: () => computedValue.value as string | number | string[],
  set: (value) => {
    computedValue.value = value;
  },
});

const inputElClass = computed(() => {
  const base = [
    "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full",
    "dark:placeholder-gray-400",
    computedType.value === "textarea" ? "h-24" : "h-12",
    props.borderless ? "border-0" : "border",
    props.transparent ? "bg-transparent" : "bg-white dark:bg-slate-800",
  ];

  if (props.icon) {
    base.push("pl-10");
  }

  return base;
});

const computedType = computed(() => (props.options ? "select" : props.type));

const controlIconH = computed(() =>
  props.type === "textarea" ? "h-full" : "h-12"
);

const mainStore = useMainStore();

const selectEl = ref<HTMLElement | null>(null);

const textareaEl = ref<HTMLElement | null>(null);

const inputEl = ref<HTMLInputElement | null>(null);

onMounted(() => {
  if (selectEl.value) {
    emit("setRef", selectEl.value);
  } else if (textareaEl.value) {
    emit("setRef", textareaEl.value);
  } else {
    emit("setRef", inputEl.value);
  }
});

if (props.ctrlKFocus) {
  const fieldFocusHook = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      inputEl.value?.focus();
    } else if (e.key === "Escape") {
      inputEl.value?.blur();
    }
  };

  onMounted(() => {
    if (!mainStore.isFieldFocusRegistered) {
      window.addEventListener("keydown", fieldFocusHook);
      mainStore.isFieldFocusRegistered = true;
    } else {
      // console.error('Duplicate field focus event')
    }
  });

  onBeforeUnmount(() => {
    window.removeEventListener("keydown", fieldFocusHook);
    mainStore.isFieldFocusRegistered = false;
  });
}
</script>

<template>
  <div class="relative">
    <select
      v-if="computedType === 'select'"
      :id="id"
      v-model="computedValue"
      :name="name"
      :class="inputElClass"
    >
      <option
        v-for="option in options"
        :key="typeof option !== 'string' ? option.id : option"
        :value="option"
      >
        {{ typeof option !== "string" ? option.label : option }}
      </option>
    </select>
    <textarea
      v-else-if="computedType === 'textarea'"
      :id="id"
      v-model="textAreaValue"
      :class="inputElClass"
      :name="name"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :required="required"
    />
    <input
      v-else
      :id="id"
      ref="inputEl"
      v-model="computedValue"
      :name="name"
      :maxlength="maxlength"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :required="required"
      :placeholder="placeholder"
      :type="computedType"
      :class="inputElClass"
    />
    <FormControlIcon v-if="icon" :icon="icon" :h="controlIconH" />
  </div>
</template>
