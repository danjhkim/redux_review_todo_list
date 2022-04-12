import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TEST_ACTION } from '../actions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './Todo';
import Home from './Home';
import Nav from './Nav';
import Completed from './Completed';

function App() {
	const dispatch = useDispatch();
	const data = useSelector(state => state.testReducer);

	useEffect(() => {
		dispatch(TEST_ACTION());
	}, [dispatch]);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Router>
			<div className='App'>
				<Nav />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/todo' element={<Todo />} />
					<Route exact path='/completed' element={<Completed />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
