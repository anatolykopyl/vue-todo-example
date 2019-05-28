import uuid from 'uuid'

const state = {
    todos: [
        {
            id: uuid.v4(),
            name: "Что-то, что я собираюсь сделать",
            completed: false
        },
        {
            id: uuid.v4(),
            name: "Что-то, что я уже сделал",
            completed: true
        }
    ]
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async toggleComplete({commit}, id) {
        commit('toggleComplete', id)
    },
    async addTodo({commit}, name) {
        commit('addTodo', name)
    },
    async delTodo({commit}, id) {
        commit('delTodo', id)
    }
};

const mutations = {
    toggleComplete(state, id) {
        state.todos.forEach(element => {
            if (element.id == id) {
                element.completed = !element.completed
            }
        });
    },
    addTodo(state, n) {
        state.todos.unshift({
            id: uuid.v4(),
            name: n,
            completed: false
        });
    },
    delTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};