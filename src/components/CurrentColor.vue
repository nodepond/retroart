<template>
  <div>
    Current color: <canvas v-bind:style='{ backgroundColor: color }' />
  </div>
</template>

<script>
export default {
  name: 'currentColor',
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
