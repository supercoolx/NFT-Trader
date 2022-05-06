import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState } from 'redux/reducers';
import { decrement, increment } from 'redux/slices/counter';

function App() {
	const count = useSelector((state: IState) => state.counter.value);
	const dispatch = useDispatch();
	const onPlus = () => dispatch(increment());
	const onMinus = () => dispatch(decrement());

	return (
		<div className='p-5'>
			{/* <button className='px-3 py-2 font-bold border border-black rounded-md'>Authenticate</button> */}
			<button onClick={onMinus} className='w-10 py-2 font-bold border border-black rounded-md'>-</button>
			<span className='px-5 text-lg text-center'>{count}</span>
			<button onClick={onPlus} className='w-10 py-2 font-bold border border-black rounded-md'>+</button>
		</div>
	);
}

export default App;
