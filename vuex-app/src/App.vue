<template>
  <div id="app">
    <div class='mainHead'>
      <div>
        <a href="">活动列表</a>
        <a href="">活动管理</a>
      </div>
      
    </div>
    <Demo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Demo from './officialDemos/shopCartByDemo/main.vue'
//import store from './store/namespace.js'

// 注册命名空间
// store.registerModule('c',{
//   state: {
//     name: 'xiaomi'
//   }
// })

export default {
  name: 'app',
  components: {
    Demo
  }
}
</script>

<style >
.mainHead {
  position: fixed;
  top: 10px;
}
.mainHead div {
  display: flex;
  width: 300px;
  justify-content:space-around;
}
.mainHead a {
  color: #4ac8d6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
