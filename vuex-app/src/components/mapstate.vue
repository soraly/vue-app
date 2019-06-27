<template>
  <div class="hello">
    hello,vuex,count is {{count}}
    <button @click='add'>add</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  data(){
    return {
    }
  },
  created() {
    console.log(this.$store.state.count);
  },
  methods: {
    add(){
      this.$store.commit('increment');
      console.log(this.$store.state.count,'store.state.count')
    }
  },

  //mapState可以帮助我们生成计算属性
  computed: mapState({
    count: state=>state.count, //还可以简写成 'count'
  }),
  
  //当映射的计算属性名称和state里的对应的值名称相同时，可以传入数组，更加简洁
  // computed: mapState(['count']),
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
