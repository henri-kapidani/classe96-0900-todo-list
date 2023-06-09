<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	$todos = file_get_contents('todos.json');
	echo $todos;

} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
	// prendere il todos originale
	$todos = file_get_contents('todos.json');

	// convertirlo in array php
	$arr_todos = json_decode($todos, true);

	// pushare a questo array il nuovo todo
	$arr_todos[] = [
		'text'	=> $_POST['newTodo'],
		'done'	=> false,
	];

	// riconvertire l'array modificato in json
	$todos = json_encode($arr_todos);

	// salvare il nuovo jsono nel file todos.json
	file_put_contents('todos.json', $todos);

	// restituire il nuovo json al client
	echo $todos;
}
