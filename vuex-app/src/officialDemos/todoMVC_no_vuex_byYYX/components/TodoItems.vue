<template>
  <div class="wrap">
    <ul class="todo-list">
      <li class="todo" v-for='item in filteredTodos' :key='item.id'>
        <div class="view">
          <input type="checkbox" class="toggle" @click='changeState(item)' :checked='item.check'>
          <label :class='{complete: item.state=="complete"}'>{{item.name}}</label>
          <button @click='removeTodo(item)'>x</button>
        </div>
      </li>
    </ul>
    <p class="footer">
        <span class="todo-count" v-show='undoneCount'>
            <strong>{{undoneCount}}</strong> {{undoneCount | fushu('item')}} left
        </span>
        <ul class="filters">
            <li v-for="(val,key) in filters" :key=key>
                <a href="javascript:;" @click='state=key' :class="{selected: state== key}">{{key | capitalize}}</a>
            </li>
        </ul>
    </p>
  </div>
</template>

<style>
li {
    list-style: none;
}
ul,p {
    margin: 0
}
.todo-list {
  margin: 0;
  padding: 0;
  border: 1px solid #ddd;
  list-style: none;
}
.todo-list li {
  position: relative;
  font-size: 24px;
  background: #fff;
  border-bottom: 1px solid #ededed;
}
.todo-list li:last-child {
  border-bottom: none;
}
.todo-list label {
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1;
  transition: color 0.4s;
}
label.complete {
        color: #d9d9d9;
    text-decoration: line-through;
}
.todo-list button {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 20px;
    height: 20px;
    margin: auto 0;
    font-size: 18px;
    line-height: 17px;
    padding: 0;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}
.todo-list li button:hover {
    color: #af5b5e;
}
input.toggle {
  width: 20px;
  height: 20px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 10px;
}

.todo-count {
    float: left;
}
.filters {
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
}
.filters li {
    display: inline;
}
.filters li a {
    color: #333;
    margin: 10px;
    border: 1px solid transparent;
    padding: 5px;
    text-decoration: none;
}
.filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
}


.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  position: relative;
}
.footer:before {
  content: "";
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
</style>

<script>
const filters = {
    all: todos => todos,
    active: todos=> todos.filter(todo=>todo.state=='undone'),
    completed: todos=>todos.filter(todo=>todo.state=='complete')
}

export default {
    data(){
        return {
            state: 'all',
            filters
        }
    },
    props: ['todoList'],
    filters: {
        capitalize: val=> val[0].toUpperCase() + val.slice(1),
        fushu: (val,item) => val==1?item:item+'s'
    },
    computed: {
        filteredTodos(){
            return filters[this.state](this.todoList);
        },
        undoneCount(){
            return this.todoList.filter(item=>item.state=='undone').length || 0
        }
    },
    methods: {
        changeState(item){
            this.$set(item, 'check', !item.check);
            if(item.state=='undone'){
                item.state = 'complete'
            }else {
                item.state = 'undone'
            }
            sessionStorage.todoList = JSON.stringify(this.todoList);
        },
        removeTodo(todo){
            this.todoList.splice(this.todoList.indexOf(todo),1);
            sessionStorage.todoList = JSON.stringify(this.todoList);
        }
    },
    created() {
        
        //console.log(this.todoList,'todoList')
    },
};
</script>
