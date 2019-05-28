<template>
  <div>
    <form autocomplete="off" @submit.prevent="$emit('add-todo', inputName); inputName = '';" class="addTodo">
      <input type="text" v-model="inputName" name="title" placeholder="Название дела..." class="txtField">
      <input type="submit" value="Добавить" class="btn">
    </form>
  </div>
</template>

<script>
  export default {
    name: "AddTodo",
    data() {
      return {
        inputName: ''
      }
    }
  }
</script>

<style scoped>
  .addTodo {
    width: 400px;
    height: 30px;
    margin: auto;
    text-align: left;
  }

  .txtField {
    font-family: 'Oswald', sans-serif;
    width: 300px;
    float: left;
    border-width: 0px;
    border-bottom-width: 1px;
    height: 30px;
    font-size: 16px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .btn {
    font-family: 'Oswald', sans-serif;
    float: right;
    font-size: 16px;
    border: 0ch;
    height: 30px;
    width: 90px;
    background: black;
    color: white;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
</style>
