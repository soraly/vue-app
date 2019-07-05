<template>
    <div>
        <SearchInput v-on:onBtnClick='handleBtnClick'></SearchInput>
        <TodoItems :todoList='todoList'></TodoItems>
    </div>
</template>

<script>
import TodoItems from './components/TodoItems.vue'
import SearchInput from './components/SearchInput.vue'


export default {
    data(){
        return {
            todoList: []
        }
    },
    components: {
        SearchInput,
        TodoItems
    },
    methods: {
        handleBtnClick(res){
            this.todoList.push({
                id: this.todoList.length+1,
                name: res,
                state: 'undone'
            })
            sessionStorage.todoList = JSON.stringify(this.todoList);
        }
    },
    created() {
        if(sessionStorage.todoList){
            this.todoList = JSON.parse(sessionStorage.todoList)
        }
    },
}
</script>
