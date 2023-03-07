import { useState } from 'react';

import './App.css';

function App() {
	const [tasks, setTasks] = useState('');
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
						<ul>
							{tasks.map((task, index) => (
								<li key={index}>{task.title}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
