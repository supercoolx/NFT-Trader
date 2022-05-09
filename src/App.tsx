import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'pages/Nav';
import New from 'pages/New';
import Home from 'pages/Home';
import Trade from 'pages/Trade';
import History from 'pages/History';

function App() {

	return (
		<div className='min-h-screen bg-neutral-100'>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new" element={<New />} />
					<Route path="/trade" element={<Trade />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
