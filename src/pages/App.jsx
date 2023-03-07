import { useState } from 'react';

import './App.css';

function App() {
	const [tasks, setTasks] = useState([]);
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;

		addTask(value);
		setValue('');
	};

	const addTask = (title) => {
		const newTasks = [...tasks, { title, completed: false }];
		setTasks(newTasks);

		console.log(tasks);
	};

	const completeTask = (index) => {
		const newTasks = [...tasks];
		console.log(newTasks);

		console.log('indexas: ', index);
		newTasks[index].completed = true;
		setTasks(newTasks);
	};

	const removeTask = (index) => {
		const newTasks = [...tasks];
		newTasks.splice(index, 1);
		setTasks(newTasks);
	};

	return (
		<div className="App">
			<div className="container">
				<div className="add-to-list-content">
					<h1 className="title">Add to the list</h1>
					<div className="add-elements">
						<form onSubmit={handleSubmit}>
							<input
								htmlFor="list-element"
								type="text"
								className="input"
								value={value}
								onChange={(e) => setValue(e.target.value)}
							/>
						</form>
					</div>
				</div>

				<div className="to-do-list-content">
					<h1 className="title">To do list</h1>
					<div className="to-do-list">
						{tasks.map((task, index) => (
							<div
								className="task"
								key={index}
								style={{
									textDecoration: task.completed ? 'line-through' : '',
								}}
							>
								{task.title}
								<div className="button-container">
									<button onClick={() => completeTask(index)}>Complete</button>
									<button
										style={{ background: 'red' }}
										onClick={() => removeTask(index)}
									>
										X
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
