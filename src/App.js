import React, { useEffect, useState } from 'react';
import { MainContainer } from './App-css';
import Carousel from './components/Carousel';
import img1 from './assets/img-2.jpg';
import img2 from './assets/img-3.jpg';
import img3 from './assets/img-4.jpg';

const App = () => {
	const images = [img1, img2, img3];
	const [image, setImage] = useState(images[0]);
	const slideshow = () => {
		let index = images.indexOf(image);
		if (image !== images[images.length - 1]) {
			index++;
			setImage(images[index]);
		} else {
			setImage(images[0]);
		}
	};
	useEffect(() => {
		const interval = setInterval(() => {
			slideshow();
		}, 10000);
		return () => clearInterval(interval);
	}, [image]);
	return (
		<MainContainer>
			<Carousel />
		</MainContainer>
	);
};

export default App;
