<template>
    <canvas :style='style'></canvas>
</template>

<script>
export default {
  name: 'pixel',
  data: function () {
    return {
      color: '#ff0000',
      style: 'backgroundColor: ' + this.color
    }
  }
}
</script>

<style>
</style>
