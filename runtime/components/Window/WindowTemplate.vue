<script setup lang="ts">
const props = defineProps<{
  window: WindowController
}>()
</script>

<template>
  <Window v-bind="$props">
    <iframe src="https://mines.enn3.ovh/" :width="props.window.state.sizes.width" :height="props.window.state.sizes.height"></iframe>
  </Window>
</template>

<style scoped lang="scss"></style>
