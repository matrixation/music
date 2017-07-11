<template>
<div id="app">
  <m-header></m-header>
  <tab></tab>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  <!-- <father></father> -->
</div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
import Father from 'components/father/father'
export default {
  components: {
    MHeader,
    Tab
    // Father
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
