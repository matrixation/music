<template>
<div class="tree">
  <template class="item-list" v-for="item in tree">
    <div class="item">
      <span>{{item.name}}</span>
      <div class="">
        {{item.value}}
      </div>
    </div>
  </template>
</div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  data() {
    return {
      tree: []
    }
  },
  mounted() {
    this.$nextTick(function() {
      this._getRecommend()
    })
  },
  methods: {
    _getRecommend() {
      axios.get('static/tree.json')
        .then((res) => {
          this.tree = res.data.grandpa
        })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
