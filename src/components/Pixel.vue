<template>
    <canvas v-bind:style="{ backgroundColor: color }"
      @mouseup='unpressMouse'
      @mousedown='pressMouse'
      @mousemove='setColor'
      :width="pixelsize"
      :height="pixelsize"
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
  computed: {
    pixelsize () {
      return this.$store.state.pixelsize + 'px'
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
    padding: 0;
  }
</style>
