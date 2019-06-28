<template>
  <div class="hello">
    hello,vuex,count is {{count}}
    <p>fruit numbers：{{goodsNumsss}}</p>
    <button @click="add">add</button>
    <p>
      <button @click='addFruit'>addFruit</button>
    </p>
    <div>
      <input type="text" placeholder="请输入水果" v-model='fruit'>
    </div>
    <ul>
      <li v-for="fruit in goodsList">{{fruit.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions } from "vuex";


export default {
  name: "HelloWorld",
  data() {
    return {
      fruit: ''
    };
  },
  created() {
    console.log(this.$store.getters.getNameById(3));
  },
  methods: {
    add() {
      this.$store.commit("increment",{count:10});
      this.$store.commit("incrementAgain",{count:10});
      //this.$store.dispatch('increment',{count:10});
      
    },
    addFruit(){
      this.$store.commit('addFruit',this.fruit);
    }
  },

  //mapState可以帮助我们生成计算属性
  computed: {
    ...mapState({
      count: state => state.count, //还可以简写成 'count'
      nums: state => state.goodsList.length,
      goodsList: state=>state.goodsList
    }),
    ...mapGetters({
      goodsNumsss: 'goodsNums'
    })
  },

  //当映射的计算属性名称和state里的对应的值名称相同时，可以传入数组，更加简洁
  // computed: mapState(['count']),
  props: {
    msg: String
  }
};
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
