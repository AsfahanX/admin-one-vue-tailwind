<script setup lang="ts">
import AsideMenuLayer from "@/components/AsideMenuLayer.vue";
import OverlayLayer from "@/components/OverlayLayer.vue";
import type { MenuItem } from "@/types";

defineProps<{
  menu: MenuItem[];
  isAsideMobileExpanded?: boolean;
  isAsideLgActive?: boolean;
}>();

const emit = defineEmits<{
  (e: "menu-click", item: MenuItem): void;
  (e: "aside-lg-close-click"): void;
}>();

const menuClick = (item: MenuItem) => {
  emit("menu-click", item);
};

const asideLgCloseClick = () => {
  emit("aside-lg-close-click");
};
</script>

<template>
  <AsideMenuLayer
    :menu="menu"
    :class="[
      isAsideMobileExpanded ? 'left-0' : '-left-60 lg:left-0',
      { 'lg:hidden xl:flex': !isAsideLgActive },
    ]"
    @menu-click="menuClick"
    @aside-lg-close-click="asideLgCloseClick"
  />
  <OverlayLayer
    v-show="isAsideLgActive"
    z-index="z-30"
    @overlay-click="asideLgCloseClick"
  />
</template>
