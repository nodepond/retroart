<template>
  <canvas v-bind:style='{ backgroundColor: color }' />
</template>

<script>
export default {
  name: 'palette',
  data () {
    return {
      color: '#ff7788'
    }
  }
}
</script>

<style scoped>
  canvas {
    width: 40px;
    height: 40px;
  }
</style>
