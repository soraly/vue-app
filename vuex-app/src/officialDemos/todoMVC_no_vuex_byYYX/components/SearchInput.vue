<template>
  <div class="search">
    <input type="text" placeholder="请添加对象" v-model="inpVal" @keyup.enter="addTodo" ref="inp">
    <button @click="addTodo">添加</button>
  </div>
</template>

<style>
.search {
  background: #fff;
  padding: 15px;
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 5px 10px;
  margin: 10px 0;
}
.search input {
  width: 70%;
  border: 0;
  padding: 0;
  height: 35px;
  display: inline-block;
}
.search button {
  width: 60px;
  float: right;
  font-size: 14px;
  border-radius: 0;
  line-height: 25px;
  margin: 5px 5px 0 0;
  display: inline-block;
  color: #fff;
  background: #4ac8d5;
  border: none;
}
</style>

<script>
export default {
  data() {
    return {
      inpVal: ""
    };
  },
  methods: {
    addTodo() {
      this.inpVal.trim() && this.$emit("onBtnClick", this.inpVal);
      this.inpVal = "";
    }
  },
  mounted() {
    this.$refs.inp.focus();
  }
};
</script>