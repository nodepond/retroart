<template>
  <div>
    Current color: <canvas v-bind:style='{ backgroundColor: selectedColor }' />
  </div>
</template>

<script>
export default {
  name: 'currentColor',
  props: [ 'selectedColor' ],
  data () {
    return {
      color: '#ff8877'
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
