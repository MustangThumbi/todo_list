 import React from 'react'

function Task(props) {
	return (
		<div>
		<ul>
		{props.tasks?.map((task)=>{
			return(
				<li className="list" key ={"task.id"}>
				<div className="name">{task.name}</div>
				<div className="duedate">{task.duedate}</div>
				<div className= "desc">{task.description}</div>
				
				
				<br></br>
				{task.decription}
				</li>)
		})}
		</ul>	
		</div>
		
	);
}

export default Task