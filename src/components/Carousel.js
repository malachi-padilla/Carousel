import React, { useEffect, useState } from 'react';
import {
	RightBtnContainer,
	LeftBtnContainer,
	CarouselBtns,
	CarouselCard,
	CarouselContainer,
	CarouselCardImage,
	CarouselCardInfoContainer,
	InfoBox,
	PriceBox,
	InfoBoxTitle,
	InfoBoxIcons,
	ListingsContainer,
} from './Carousel-css';
import img1 from '../assets/img-2.jpg';
import img2 from '../assets/img-3.jpg';
import img3 from '../assets/img-4.jpg';

const Carousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [translate, setTranslate] = useState(0);
	const listings = [
		{ description: 'mansion on the hills', bed: '4', bath: '2', sqft: '2500', price: '800,000', img: img1 },
		{ description: 'contemporary estate', bed: '5', bath: '3', sqft: '2800', price: '850,000', img: img2 },
		{ description: 'awesome family home', bed: '4', bath: '2.5', sqft: '2600', price: '860,000', img: img3 },
		{ description: 'mansion on the hills', bed: '4', bath: '2', sqft: '2500', price: '800,000', img: img1 },
		{ description: 'contemporary estate', bed: '5', bath: '3', sqft: '2800', price: '850,000', img: img2 },
		{ description: 'awesome family home', bed: '4', bath: '2.5', sqft: '2600', price: '860,000', img: img3 },
		{ description: 'mansion on the hills', bed: '4', bath: '2', sqft: '2500', price: '800,000', img: img1 },
		{ description: 'contemporary estate', bed: '5', bath: '3', sqft: '2800', price: '850,000', img: img2 },
		{ description: 'awesome family home', bed: '4', bath: '2.5', sqft: '2600', price: '860,000', img: img3 },
		{ description: 'mansion on the hills', bed: '4', bath: '2', sqft: '2500', price: '800,000', img: img1 },
		{ description: 'contemporary estate', bed: '5', bath: '3', sqft: '2800', price: '850,000', img: img2 },
		{ description: 'awesome family home', bed: '4', bath: '2.5', sqft: '2600', price: '860,000', img: img3 },
		{ description: 'mansion on the hills', bed: '4', bath: '2', sqft: '2500', price: '800,000', img: img1 },
		{ description: 'contemporary estate', bed: '5', bath: '3', sqft: '2800', price: '850,000', img: img2 },
		{ description: 'awesome family home', bed: '4', bath: '2.5', sqft: '2600', price: '860,000', img: img3 },
		{ description: 'mansion on the hills', bed: '4', bath: '2', sqft: '2500', price: '800,000', img: img1 },
		{ description: 'contemporary estate', bed: '5', bath: '3', sqft: '2800', price: '850,000', img: img2 },
		{ description: 'awesome family home', bed: '4', bath: '2.5', sqft: '2600', price: '860,000', img: img3 },
	];

	const handleIncrementIndex = () => {
		if (activeIndex < listings.length - 3) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	};
	const handleDecrementIndex = () => {
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		} else {
			setActiveIndex(listings.length - 3);
		}
	};

	const translateMultiply = () => {
		if (activeIndex > 1) {
			setTranslate(activeIndex * 108);
		} else {
			setTranslate(activeIndex * 108);
		}
	};

	useEffect(() => {
		translateMultiply();
	}, [activeIndex]);

	console.log(translate);

	return (
		<CarouselContainer>
			<RightBtnContainer>
				<CarouselBtns onClick={handleDecrementIndex}>
					<i className='fa-solid fa-angle-left'></i>
				</CarouselBtns>
			</RightBtnContainer>
			<ListingsContainer>
				{listings.map((item, index) => (
					<CarouselCard key={index} translate={translate}>
						<CarouselCardImage image={item.img}></CarouselCardImage>
						<CarouselCardInfoContainer>
							<InfoBox>
								<InfoBoxTitle>{item.description}</InfoBoxTitle>
								<InfoBoxIcons>
									<i className='fa-solid fa-bed'></i>
									{item.bed}
									<i className='fa-solid fa-bath'></i>
									{item.bath}
									<i className='fa-solid fa-ruler-combined'></i>
									{item.sqft}
								</InfoBoxIcons>
							</InfoBox>
							<PriceBox>${item.price}</PriceBox>
						</CarouselCardInfoContainer>
					</CarouselCard>
				))}
			</ListingsContainer>

			<LeftBtnContainer>
				<CarouselBtns onClick={handleIncrementIndex}>
					<i class='fa-solid fa-angle-right'></i>
				</CarouselBtns>
			</LeftBtnContainer>
		</CarouselContainer>
	);
};

export default Carousel;
