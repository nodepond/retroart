<template>
  <div>
    <el-row>
      <el-col :span="16" justify="center">
        <drawcanvas />
        <div>Pico-8 palette: <palette /></div>
        <div><current-color /></div></el-col>
      <el-col :span="8" justify="center">
        <el-select v-model="value" placeholder="Select canvas-size">
          <el-option
            v-for="item in sizes"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <el-row>
      <div style="margin-top: 24px;">This is a tiny pixel-editor, made just for fun<br />completely in VueJS in some hours by Nodepond.<br />2017.</div>
    </el-row>
  </div>
</template>

<script>
  import Drawcanvas from '@/components/Drawcanvas'
  import Palette from '@/components/Palette'
  import CurrentColor from '@/components/CurrentColor'
  import { Row, Col, Select, Option } from 'element-ui'

  export default {
    name: 'drawmode',
    components: {
      elRow: Row,
      elCol: Col,
      elSelect: Select,
      elOption: Option,
      Drawcanvas,
      Palette,
      CurrentColor
    },
    methods: {
      selectSize () {
        console.log('huhiubouu')
      }
    },
    computed: {
      canvasSize () {
        return 'herllo'
      }
    },
    data () {
      return {
        selectedColor: '#ff0000',
        sizes: [{
          value: '32x32',
          label: '32x32'
        }, {
          value: '64x64',
          label: '64x64'
        }, {
          value: '128x128',
          label: '128x128'
        }],
        value: ''
      }
    }
  }
</script>
