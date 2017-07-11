<template>
<div class="son">
  <ul>
    <li v-for="item in data" @click="open" >{{item}}</li>
  </ul>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    data:{
      type:Array,
      default:[]
    }
  },
  methods: {
    open() {
      this.$emit('showbox','我是子组件传来的信息')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
