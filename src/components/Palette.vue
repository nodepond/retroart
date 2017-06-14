<template>
  <div>
    <canvas v-for="color in colors.pico8" v-bind:style='{ backgroundColor: color }' @click='pickColor' />
  </div>
</template>

<script>
export default {
  name: 'palette',
  methods: {
    pickColor (event) {
      console.log('pickColor called')
      console.log(event.target.style.backgroundColor)
    }
  },
  data () {
    return {
      color: this.color,
      colors: {
        pico8:
        [ '#000000', '#1D2B53', '#7E2553', '#008751',
          '#AB5236', '#5F574F', '#C2C3C7', '#FFF1E8',
          '#FF004D', '#FFA300', '#FFEC27', '#00E436',
          '#29ADFF', '#83769C', '#FF77A8', '#FFCCAA' ]}
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
