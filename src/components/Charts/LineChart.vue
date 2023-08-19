<script setup lang="ts">
import { ref, watch, computed, onMounted, type PropType } from "vue";
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip,
  type ChartItem,
  type ChartData,
} from "chart.js";

const props = defineProps<{
  data: ChartData;
}>();

const root = ref<ChartItem | null>(null);

let chart: Chart;

Chart.register(
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip
);

onMounted(() => {
  if (!root.value) {
    return;
  }

  chart = new Chart(root.value, {
    type: "line",
    data: props.data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false,
        },
        x: {
          display: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
});

const chartData = computed(() => props.data);

watch(chartData, (data) => {
  if (chart) {
    chart.data = data;
    chart.update();
  }
});
</script>

<template>
  <canvas ref="root" />
</template>
