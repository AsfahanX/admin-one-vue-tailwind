<script setup lang="ts">
import { computed, onMounted, onUnmounted } from "vue";
import { mdiClose } from "@mdi/js";
import BaseButton from "@/components/BaseButton.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import CardBox from "@/components/CardBox.vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import type { ButtonColorVariant } from "@/colors";

const props = withDefaults(
  defineProps<{
    title: string;
    button?: ButtonColorVariant;
    buttonLabel?: string;
    hasCancel?: boolean;
    modelValue?: string | number | boolean;
  }>(),
  {
    button: "info",
    buttonLabel: "Done",
    modelValue: undefined,
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: typeof props.modelValue): void;
  (e: "cancel"): void;
  (e: "confirm"): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const confirmCancel = (mode: "confirm" | "cancel") => {
  value.value = false;

  if (mode === "confirm") {
    emit("confirm");
  } else {
    emit("cancel");
  }
};

const confirm = () => confirmCancel("confirm");

const cancel = () => confirmCancel("cancel");

const closeOnEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && value.value) {
    cancel();
  }
};

onMounted(() => {
  window.addEventListener("keydown", closeOnEscape);
});

onUnmounted(() => {
  window.removeEventListener("keydown", closeOnEscape);
});
</script>

<template>
  <OverlayLayer v-show="value" @overlay-click="cancel">
    <CardBox
      v-show="value"
      class="shadow-lg max-h-modal w-11/12 md:w-3/5 lg:w-2/5 xl:w-4/12 z-50"
      is-modal
    >
      <CardBoxComponentTitle :title="title">
        <BaseButton
          v-if="hasCancel"
          :icon="mdiClose"
          color="whiteDark"
          small
          rounded-full
          @click.prevent="cancel"
        />
      </CardBoxComponentTitle>

      <div class="space-y-3">
        <slot />
      </div>

      <template #footer>
        <BaseButtons>
          <BaseButton :label="buttonLabel" :color="button" @click="confirm" />
          <BaseButton
            v-if="hasCancel"
            label="Cancel"
            :color="button"
            outline
            @click="cancel"
          />
        </BaseButtons>
      </template>
    </CardBox>
  </OverlayLayer>
</template>
