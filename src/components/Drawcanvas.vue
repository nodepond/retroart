<template>
  <div class="drawcanvas">
    <div v-for="h in canvasHeight" class="pixelrow">
      <pixel v-for="w in canvasWidth" pixel-color="#1D2B53"></pixel>
    </div>
  </div>
</template>

<script>
import Pixel from '@/components/Pixel'

export default {
  name: 'drawcanvas',
  props: [ 'selectedColor' ],
  components: {
    Pixel
  },
  computed: {
    canvasWidth () {
      return this.$store.state.width
    },
    canvasHeight () {
      return this.$store.state.height
    },
    pixelSize () {
      return this.$store.state.pixelsize
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.pixelrow {
  display: flex;
  justify-content: center;
}
</style>
