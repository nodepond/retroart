<template>
  <div>
    <div>Palette: <palette /></div>
    <div>Draw here: <drawcanvas /></div>
  </div>
</template>

<script>
  import Drawcanvas from '@/components/Drawcanvas'
  import Palette from '@/components/Palette'

  export default {
    name: 'drawmode',
    components: {
      Drawcanvas,
      Palette
    },
    data () {
      return {
      }
    }
  }
</script>
