<template>
  <div>
    <el-row>
      <el-col :span="20" justify="center"><drawcanvas /></el-col>
      <el-col :span="4" justify="center">
        <div>Pico-8 palette: <palette /></div>
        <div><current-color /></div>
      </el-col>
    </el-row>

    <div style="margin-top: 24px;">This is a tiny pixel-editor, made just for fun<br />completely in VueJS in some hours by Nodepond.<br />2017.</div>
  </div>
</template>

<script>
  import Drawcanvas from '@/components/Drawcanvas'
  import Palette from '@/components/Palette'
  import CurrentColor from '@/components/CurrentColor'
  import { Row, Col } from 'element-ui'

  export default {
    name: 'drawmode',
    components: {
      elRow: Row,
      elCol: Col,
      Drawcanvas,
      Palette,
      CurrentColor
    },
    data () {
      return {
        selectedColor: '#ff0000'
      }
    }
  }
</script>
