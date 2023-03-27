<template>
  <div>
    <h1>Component Check List</h1>
    <h1>{{ listData }}</h1>
    <div class="content-wrapper">
      <ul class="list-wrapper width-calc-80">
        <li v-for="(item, index) in examData" :key="index">
          <p class="main-title">
            {{ index + "." + item }}
          </p>
          <div class="question-wrapper">
            <div class="radio-wrapper">
              <div class="line"></div>
              <ul class="radio-list">
                <li>
                  <label for="">1</label>
                  <input type="radio" :name="item" id="" />
                </li>
                <li>
                  <label for="">2</label>
                  <input type="radio" :name="item" id="" />
                </li>
                <li>
                  <label for="">3</label>
                  <input type="radio" :name="item" id="" />
                </li>
                <li>
                  <label for="">4</label>
                  <input type="radio" :name="item" id="" />
                </li>
                <li>
                  <label for="">5</label>
                  <input type="radio" :name="item" id="" />
                </li>
              </ul>
            </div>
            <ul class="text-list">
              <li>매우 그렇지 않다</li>
              <li>보통</li>
              <li>매우 그렇다</li>
            </ul>
          </div>
        </li>
        <li>
          <p class="main-title">나이를입력하세요 (선택)</p>
          <div class="question-wrapper">
            <input type="text" name="" id="" />
          </div>
        </li>
        <li>
          <p class="main-title">성별 (선택)</p>
          <div class="question-wrapper">
            <input type="checkbox" name="xxx" value="yyy" checked />
            <br /><br />
            <input type="checkbox" name="xxx" value="yyy" checked />
          </div>
        </li>
      </ul>
      <div class="width-calc-40">
        <button class="button-blue">결과 저장 및 제출</button>
      </div>
    </div>
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
