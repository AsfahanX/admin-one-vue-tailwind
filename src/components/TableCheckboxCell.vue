<script setup lang="ts">
import { ref, watch } from "vue";

withDefaults(
  defineProps<{
    type?: string;
  }>(),
  {
    type: "td",
  }
);

const emit = defineEmits<{
  (e: "checked", checked: boolean): void;
}>();

const checked = ref(false);

watch(checked, (newVal) => {
  emit("checked", newVal);
});
</script>

<template>
  <component :is="type" class="lg:w-1">
    <label class="checkbox">
      <input v-model="checked" type="checkbox" />
      <span class="check" />
    </label>
  </component>
</template>
