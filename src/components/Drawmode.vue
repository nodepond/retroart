<template>
  <div>
    <div><drawcanvas /></div>
    <div>Pico-8 palette: <palette @picked-color="selectColor" /></div>
    <div><current-color /></div>
    <div style="margin-top: 24px;">This is a tiny pixel-editor, made just for fun<br />completely in VueJS in some hours by Nodepond.<br />2017.</div>
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
