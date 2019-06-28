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
    console.log(this.$store.state)
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
    ...mapGetters(['listLength'])
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
