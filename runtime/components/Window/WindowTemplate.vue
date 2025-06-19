<script setup lang="ts">
const props = defineProps<{
  window: WindowController
}>()
</script>

<template>
  <Window v-bind="$props" v-on:load="console.log(props.window)">
    <iframe src="https://mines.enn3.ovh/" :width="640" :height="480"></iframe>
  </Window>
</template>

<style scoped lang="scss"></style>
