<template>
  <div>
    <div>Draw here: <drawcanvas /></div>
    <div>Palette: <palette @picked-color="selectColor" /></div>
    <div><current-color v-bind:selected-color="selectedColor" /></div>
  </div>
</template>

<script>
  import Drawcanvas from '@/components/Drawcanvas'
  import Palette from '@/components/Palette'
  import CurrentColor from '@/components/CurrentColor'

  export default {
    name: 'drawmode',
    components: {
      Drawcanvas,
      Palette,
      CurrentColor
    },
    methods: {
      selectColor (col) {
        this.selectedColor = col
      }
    },
    data () {
      return {
        selectedColor: '#ff0000'
      }
    }
  }
</script>
