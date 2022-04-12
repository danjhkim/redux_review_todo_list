import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ADD_TASK, REMOVE_TASK, MOVE_COMPLETED } from '../actions';

const Todo = () => {
	const dispatch = useDispatch();
	const list = useSelector(state => state.taskReducer.tasks);

	console.log(list);
	const [task, setTask] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(ADD_TASK(task));
		setTask('');
	};

	const removeTask = id => {
		dispatch(REMOVE_TASK(id));
	};

	const moveCompleted = id => {
		dispatch(MOVE_COMPLETED(id));
	};

	const renderList = () => {
		return list.map(item => {
			return (
				<div key={item.id} className='task'>
					{item.task}
					<span
						className='delete'
						onClick={e => moveCompleted(item.id)}>
						Completed
					</span>
					<span className='delete' onClick={e => removeTask(item.id)}>
						X
					</span>
				</div>
			);
		});
	};

	return (
		<div className='frame'>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					type='text'
					value={task}
					onChange={e => setTask(e.target.value)}
				/>
			</form>
			<div className='list'>{renderList()}</div>
		</div>
	);
};

export default Todo;
