import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_TASK_COMPLETED } from '../actions';

const Completed = () => {
	const dispatch = useDispatch();
	const list = useSelector(state => state.taskReducer.completed);

	const removeTask = id => {
		dispatch(REMOVE_TASK_COMPLETED(id));
	};

	const renderList = () => {
		return list.map(item => {
			return (
				<div key={item.id} className='task'>
					{item.task}

					<span className='delete' onClick={e => removeTask(item.id)}>
						X
					</span>
				</div>
			);
		});
	};

	return (
		<div className='frame'>
			<div className='list'>{renderList()}</div>
		</div>
	);
};

export default Completed;
