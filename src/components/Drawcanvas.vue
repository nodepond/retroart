<template>
  <div class="drawcanvas">
    <div class="pixelrow">
      <Pixel pixel-color="#ff99ff" />
      <Pixel pixel-color="#99ee77" />
      <Pixel pixel-color="#339966" />
    </div>
    <div class="pixelrow">
      <Pixel pixel-color="#ff9900" />
      <Pixel pixel-color="#99ff00" />
      <Pixel pixel-color="#339966" />
    </div>
    <div class="pixelrow">
      <Pixel pixel-color="#ff9900" />
      <Pixel pixel-color="#99ff00" />
      <Pixel pixel-color="#339966" />
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
