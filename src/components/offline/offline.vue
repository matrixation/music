<template>
  <div class="container">
    <input type="text" class="listInput" @keyup.enter="addNewItem">
    <ul>
      <li class="show-list" v-for="item in dataList">{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import {setLocalData,getLocalData} from 'common/js/localstorage'
let localKeys = 'localstoragekey'
export default {
  data() {
    return {
      dataList: getLocalData(localKeys)
    }
  },
  methods:{
    addNewItem(event) {
      this.dataList.push(event.target.value)
      setLocalData(localKeys,this.dataList)
      event.target.value = ''
    }
  }

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.listInput{
  border:1px solid blue
  text-align:center
  margin:10px auto
  display: block
  width: 75%
  height: 3em
}
.show-list{
  list-style: none;
  text-decoration: underline;
  cursor: pointer;
}

</style>
