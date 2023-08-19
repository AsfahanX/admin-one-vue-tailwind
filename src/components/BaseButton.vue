<script setup lang="ts">
import { computed } from "vue";
import { RouterLink, type RouterLinkProps } from "vue-router";
import { getButtonColor, type ButtonColorVariant } from "@/colors";
import BaseIcon from "@/components/BaseIcon.vue";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  Component,
} from "vue";

const props = withDefaults(
  defineProps<{
    label?: string | number;
    icon?: string;
    iconSize?: number | `${number}`;
    href?: AnchorHTMLAttributes["href"];
    target?: AnchorHTMLAttributes["target"];
    to?: RouterLinkProps["to"];
    type?: ButtonHTMLAttributes["type"];
    color?: ButtonColorVariant;
    as?: string | Component;
    small?: boolean;
    outline?: boolean;
    active?: boolean;
    disabled?: boolean;
    roundedFull?: boolean;
  }>(),
  {
    label: undefined,
    icon: undefined,
    iconSize: undefined,
    href: undefined,
    target: undefined,
    to: undefined,
    type: undefined,
    color: "white",
    as: undefined,
  }
);

const is = computed(() => {
  if (props.as) {
    return props.as;
  }

  if (props.to) {
    return RouterLink;
  }

  if (props.href) {
    return "a";
  }

  return "button";
});

const computedType = computed(() => {
  if (is.value === "button") {
    return props.type ?? "button";
  }

  return null;
});

const labelClass = computed(() =>
  props.small && props.icon ? "px-1" : "px-2"
);

const componentClass = computed(() => {
  const base = [
    "inline-flex",
    "justify-center",
    "items-center",
    "whitespace-nowrap",
    "focus:outline-none",
    "transition-colors",
    "focus:ring",
    "duration-150",
    "border",
    props.disabled ? "cursor-not-allowed" : "cursor-pointer",
    props.roundedFull ? "rounded-full" : "rounded",
    getButtonColor(props.color, props.outline, !props.disabled, props.active),
  ];

  if (!props.label && props.icon) {
    base.push("p-1");
  } else if (props.small) {
    base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
  } else {
    base.push("py-2", props.roundedFull ? "px-6" : "px-3");
  }

  if (props.disabled) {
    base.push(props.outline ? "opacity-50" : "opacity-70");
  }

  return base;
});
</script>

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :target="target"
    :disabled="disabled"
  >
    <BaseIcon v-if="icon" :path="icon" :size="iconSize" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </component>
</template>
