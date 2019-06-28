<template>
  <div class="hello">
    {{name}}: {{count}}
    <p>
      list 数量是：{{listLength}}
    </p>
    <p>
      <button @click='increment'>add</button> &nbsp;
      <button @click='asyncIncrement'>asyncIncrement</button>
    </p>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  created() {
    console.log(this.$store.state.a.childA.count,'count')
    console.log(this.$store.state.c.name,'name')
  },
  
  methods: {
    increment(){
      this.$store.commit('increment')
    },
    asyncIncrement(){
      this.$store.dispatch('asyncIncrement')
    }
  },
  computed: {
    count(){
      return this.$store.state.a.count
    },
    // length(){
    //   return this.$store.getters.listLength
    // },
    ...mapState({
      name: state=>state.b.name2
    }),
    //当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
    ...mapGetters({
      listLength: 'a/listLength'  
    })
  },
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
