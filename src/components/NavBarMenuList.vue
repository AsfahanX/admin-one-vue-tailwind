<script setup lang="ts">
import NavBarItem from "@/components/NavBarItem.vue";
import type { MenuItem } from "@/types";

withDefaults(
  defineProps<{
    menu?: MenuItem[];
  }>(),
  {
    menu: () => [] as MenuItem[],
  }
);

const emit = defineEmits<{
  (e: "menu-click", event: MouseEvent, item: MenuItem): void;
}>();

const menuClick = (event: MouseEvent, item: MenuItem) => {
  emit("menu-click", event, item);
};
</script>

<template>
  <NavBarItem
    v-for="(item, index) in menu"
    :key="index"
    :item="item"
    @menu-click="menuClick"
  />
</template>
