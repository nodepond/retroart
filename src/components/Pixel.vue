<template>
    <canvas v-bind:style="{ backgroundColor: color }" />
</template>

<script>
export default {
  name: 'pixel',
  props: ['pixelColor'],
  data: function () {
    return {
      color: this.pixelColor
    }
  }
}
</script>

<style scoped>
  canvas {
    width: 30px;
    height: 30px;
    padding: 0;
  }
</style>
