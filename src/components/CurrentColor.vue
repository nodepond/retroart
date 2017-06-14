<template>
  <div>
    Current color: <canvas v-bind:style='{ backgroundColor: selectedColor }' />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'currentColor',
  computed: mapState([
    'selectedColor'
  ]),
  data () {
    return {
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
