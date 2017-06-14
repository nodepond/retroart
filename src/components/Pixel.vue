<template>
    <canvas v-bind:style="{ backgroundColor: color }" 
      @mouseup='unpressMouse'
      @mousedown='pressMouse'
      @mousemove='setColor'
       />
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
      this.$store.dispatch('MOUSE_DOWN')
    },
    unpressMouse () {
      this.$store.dispatch('MOUSE_UP')
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
