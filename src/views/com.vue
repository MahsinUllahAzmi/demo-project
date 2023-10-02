<template>
  <li class="bg-red-500 mb-4">{{ todo.id }} {{ todo.text }}</li>
</template>
<script setup>
const props = defineProps({
  todo: Object,
});
</script>
