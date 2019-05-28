<template>
  <draggable class="todos" @start="drag=true" @end="drag=false">
    <div v-bind:key="todo.id" v-for="todo in allTodos">
      <TodoItem v-bind:todo="todo" v-on:del-todo="delTodo(todo.id)" v-on:toggle-complete="toggleComplete(todo.id)" />
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable';
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Todos",
  components: {
    draggable,
    TodoItem
  },
  methods: {
    ...mapActions(["delTodo", "toggleComplete"]),
  },
  computed: mapGetters(["allTodos"])
}
</script>

<style scoped>
.todos {
  width: 400px;
  margin: auto;
}
</style>
