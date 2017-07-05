<template>
    <canvas v-bind:style="{ backgroundColor: color }"
      @mouseup='unpressMouse'
      @mousedown='pressMouse'
      @mousemove='setColor'
      ></canvas>
</template>

<script>
export default {
  name: 'pixel',
  props: ['pixelColor'],
  methods: {
    setColor () {
      if (this.$store.state.mousedown) {
        this.color = this.$store.state.selectedColor
      }
    },
    pressMouse () {
      this.$store.dispatch('mouseDown')
      this.setColor()
    },
    unpressMouse () {
      this.$store.dispatch('mouseUp')
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
    width: 12px;
    height: 12px;
    padding: 0;
  }
</style>
