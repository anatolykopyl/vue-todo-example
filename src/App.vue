<template>
  <div id="app">
    <Header />
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
#app {
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
}
</style>
