<script setup lang="ts">
const props = defineProps<{
  window: WindowController
}>()
</script>

<template>
  <Window v-bind="$props" v-on:load="console.log(...props)">
    <iframe src="https://mines.enn3.ovh/" :width="props.state.sizes.width" :height="props.state.sizes.height"></iframe>
  </Window>
</template>

<style scoped lang="scss"></style>
