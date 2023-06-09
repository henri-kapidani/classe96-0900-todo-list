const { createApp } = Vue;

createApp({
	data() {
		return {
			arrTodos: [],
			newTodo: '',
		};
	},
	methods: {
		requestTodos() {
			axios.get('http://localhost/classe96-0900-todo-list/todos.php')
				.then(response => this.arrTodos = response.data);
		},
		addTodo() {
			// this.arrTodos.push({
			// 	text: this.newTodo,
			// 	done: false,
			// });
			// this.newTodo = '';

			axios.post('http://localhost/classe96-0900-todo-list/todos.php',
				{
					newTodo: this.newTodo,
				},
				{
					headers: {
						'Content-Type': 'multipart/form-data' // è importante se fate il post per permettere a php di interpretare correttamente i parametri passati
					}
				})
				.then(response => this.arrTodos = response.data);
			this.newTodo = '';
		},
	},
	created() {
		this.requestTodos();
	}
}).mount('#app')