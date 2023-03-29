<template>
  <div>
    <h1>Component Check List</h1>
    <h3 v-for="item in listData" v-bind:key="item.index">
      {{ item.idx + ".  " + item.text }}
    </h3>
  </div>
</template>

<script lang="js">
import { data } from '../store/test.json'
export default {
    name: 'CheckList',
    data() {
      return {
        listData : data
      }
    },
  created() {
  }



}
</script>
<style></style>
