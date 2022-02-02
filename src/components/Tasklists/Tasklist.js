import React, {useState} from 'react'
import Task from '../Task/Task'
import{ Tasks} from '../Tasks/Tasks'
import styles from'./Tasklist.css';

function Tasklist() {
	const[tasks, setTasks]= useState(Tasks);
	console.log(tasks);
	return (
		<div className="main">
		<div className="texts">
			<Task tasks= {tasks} />
			</div>
		</div>
	);
}

export default Tasklist