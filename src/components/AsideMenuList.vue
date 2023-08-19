<script setup lang="ts">
import AsideMenuItem from "@/components/AsideMenuItem.vue";
import type { MenuItem } from "@/types";

defineProps<{
  isDropdownList?: boolean;
  menu: MenuItem[];
}>();

const emit = defineEmits<{
  (e: "menu-click", event: MouseEvent, item: MenuItem): void;
}>();

const menuClick = (event: MouseEvent, item: MenuItem) => {
  emit("menu-click", event, item);
};
</script>

<template>
  <ul>
    <AsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      @menu-click="menuClick"
    />
  </ul>
</template>
