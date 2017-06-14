<template>
    <canvas v-bind:style="{ backgroundColor: color }" @click='setColor' />
</template>

<script>
export default {
  name: 'pixel',
  props: ['pixelColor'],
  methods: {
    setColor () {
      console.log(this.$store.state.selectedColor)
      this.color = this.$store.state.selectedColor
    }
  },
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
