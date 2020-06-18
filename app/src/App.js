import React from 'react';
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
	return (
		<div>
			<Header />
			<Intro />
			<Main />
			<Footer />
			<a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
		</div>
	);
}

export default App;
