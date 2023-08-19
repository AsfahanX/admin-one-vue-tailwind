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
  (e: "menu-click", item: MenuItem): void;
}>();

const menuClick = (item: MenuItem) => {
  emit("menu-click", item);
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
