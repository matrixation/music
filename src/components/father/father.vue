<template>
  <div class="father">
    <son :data="dataList" @showbox="toshow"></son>
    <input v-model="dataInput" v-on:keyup.13="addDataItem()"></input>
  </div>
</template>

<script type="text/ecmascript-6">
import Son from 'components/son/son'
export default {
  data() {
    return {
      dataInput: "",
      dataList: [3,4,5,6,6,8888],
      msg:''
    }
  },
  components: {
    Son
  },
  // events: {
  //   agentDataEvent(dataInput) {
  //     this.$broadcast('addChildDataEvent', dataInput)
  // },
  methods: {
      addDataItem() {
        let self = this
        if (!(self.dataInput && self.dataInput.length > 0)) {
          return
        }
        self.dataList.push(self.dataInput)
        self.dataInput = ""
      },
      toshow(msg) {
        this.msg = msg
        console.log(this.msg)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
