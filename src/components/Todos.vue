<template>
  <draggable v-model="todos" group="people" @start="drag=true" @end="drag=false">
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)" />
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    draggable,
    TodoItem
  },
  props: ["todos"],
  methods: {
    moveItem(from, to) {
      this.todos.splice(to, 0, this.todos[from]);
      this.todos[from] = null;
    }
  }
}
</script>

<style scoped>

</style>
