<template>
  <div>
    <header>
      <h1>
        <!-- 영역 지정해서 상단 왼쪽으로 붙히게끔 표현 -->
        Titme Prespective (영역 지정해서 상단 위로 변경)
      </h1>
    </header>
    <h1>짐바르도</h1>
    <h1>시간관 검사</h1>
    (백그라운드 이미지)
    <br /><br />
    <button @click="startCheck">검사시작</button>
    <CheckList></CheckList>
  </div>
</template>

<script lang="js">
import CheckList from "../components/time_CheckList.vue";
export default {
  name: 'IndexMain',
  props: {
    msg: String
  },
  components: {
    CheckList,
  },
  methods: {
    startCheck: function () {
      this.$router.push('CheckList')
    },
  }
}
</script>

<style scoped>
header h1 {
  color: rgb(17, 17, 17);
}
</style>
