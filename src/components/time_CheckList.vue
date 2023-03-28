<template>
  <div>
    <h1>Component Check List</h1>
    <h1>{{ listData }}</h1>
  </div>
</template>

<script lang="js">
import { data } from '../store/data.json'
export default {
    name: 'CheckList',
    data() {
      return {
        listData : data
      }
    },
  created() {
    console.log(data);
  }



}
</script>
<style></style>
