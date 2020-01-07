<template>
  <div class="user-list">
    <h5>{{testdata}}</h5>
    <button type="button" @click="updateText()">update text</button>
    <h3>{{text}}</h3>
  </div>
</template>

<script src="./user-list.js"></script>

<style lang="scss" scoped>
  button{
    padding: 5px;
    font-size: 15px;
    font-weight: bold;
  }

</style>
