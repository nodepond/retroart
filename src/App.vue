<template>
  <div id="app">
    <el-row>
      <el-col :span="24" justify="center">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Row, Col } from 'element-ui'

export default {
  name: 'app',
  components: {
    elRow: Row,
    elCol: Col
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
