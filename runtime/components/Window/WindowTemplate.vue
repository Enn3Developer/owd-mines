<script setup lang="ts">
const props = defineProps<{
  window: IWindowController
}>()
</script>

<template>
  <Window v-bind="$props">
    <iframe src="https://mines.enn3.ovh/"
            :width="props.window?.state?.size?.width ?? 640"
            :height="props.window?.state?.size?.height ?? 480"
    ></iframe>
  </Window>
</template>

<style scoped lang="scss"></style>
