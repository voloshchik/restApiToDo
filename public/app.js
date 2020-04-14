new Vue({
  el: "#app",
  data() {
    return {
      isDark: true,
      show: true,
      todoTitle: "",
      todos: [],
    };
  },
  created() {
    fetch("/api/todo", {
      method: "get",
    })
      .then((res) => res.json())
      .then((todos) => {
        console.log("todos", todos);
        this.todos = todos;
      })
      .catch((e) => console.log(e));
  },
  methods: {
    addTodo() {
      const title = this.todoTitle.trim();
      if (!title) {
        return;
      }
      fetch("/api/todo", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      })
        .then((res) => res.json())
        .then(({ todo }) => {
          console.log("todo", todo);
          this.todos.push(todo);
          this.todoTitle = "";
        })
        .catch((err) => console.log(err));
    },
    removeTodo(id) {
      fetch("/api/todo/" + id, {
        method: "delete",
      })
        .then(() => {
          this.todos = this.todos.filter((t) => t.id !== id);
        })
        .catch((err) => console.log(err));
    },
    completeTodo(id) {
      console.log("id", id);
      fetch("/api/todo/" + id, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: true }),
      })
        .then((res) => res.json())
        .then(({ todo }) => {
          console.log("todo:", todo);
          const idx = this.todos.findIndex((t) => t.id === todo.id);
          console.log("idx", idx);
          this.todos[idx].updatedAt = todo.updatedAt;
          console.log("this.todos[idx]", this.todos[idx]);
        });
    },
  },
  filters: {
    capitalize(value) {
      return value.toString().charAt(0).toUpperCase() + value.slice(1);
    },
    date(value, withTime) {
      const options = {
        year: "numeric",
        month: "long",
        day: "2-digit",
      };

      if (withTime) {
        options.hour = "2-digit";
        options.minute = "2-digit";
        options.second = "2-digit";
      }

      return new Intl.DateTimeFormat("ru-RU", options).format(new Date(value));
    },
  },
});
