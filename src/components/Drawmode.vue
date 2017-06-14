<template>
  <div>
    <div>Draw here: <drawcanvas /></div>
    <div>Palette: <palette /></div>
    <div><current-color /></div>
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
    data () {
      return {
      }
    }
  }
</script>
