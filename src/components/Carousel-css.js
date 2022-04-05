import styled from 'styled-components';

export const CarouselContainer = styled.div`
	width: 100%;
	display: inline-flex;
	z-index: 1;
	align-items: center;
	justify-content: center;
	padding-top: 2rem;
	overflow: hidden;
	padding: 1rem;
	gap: .8rem;
`;

export const ListingsContainer = styled.div`
	white-space: nowrap;
	width: 70%;
	overflow: hidden;
	padding: 2rem;
	@media (max-width:800px) {
		width:100%;

	}
	
`;
export const RightBtnContainer = styled.div`
	height: 60%;
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;
export const LeftBtnContainer = styled.div`
	height: 60%;
	width: max-content;
	display: flex;
	align-items: center;
	justify-content: flex-start;

`;

export const CarouselBtns = styled.div`
	height: 5rem;
	width: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.2);
	color: ${(props) => props.theme.colors.greyLight};
	border: 1px solid ${(props) => props.theme.colors.greyLight};
	font-size: 1.6rem;
	cursor: pointer;
	transition: all 250ms ease-in-out;
	z-index: 10;
	:hover {
		background-color: ${(props) => props.theme.colors.primaryLight};
		box-shadow: 0px 0px 1px 10px #4895ef66;
		color: ${(props) => props.theme.colors.main};
		border: 1px solid ${(props) => props.theme.colors.primaryLight};
	}
`;
export const CarouselCard = styled.div`
	height: 35rem;
	width: calc((100% - 4rem) / 3);
	background-color: ${(props) => props.theme.colors.main};
	border-radius: 0.4rem;
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	margin-right: 2rem;
	transition: all 0.5s ease-in-out;
	transform: translateX(-${(props) => props.translate}%);
	box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
	backface-visibility: hidden;


	@media (max-width:1200px) {
		width: calc((100% -4rem) / 2);
	}
	@media (max-width:800px) {
		width: calc(100%);
	}

`;

export const CarouselCardImage = styled.div`
	height: 70%;
	width: 100%;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	position: relative;
	cursor:pointer;
	:hover{
		::after{
		content: "";
		position:absolute;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0.5);
	}
  }


`;

export const CarouselCardInfoContainer = styled.div`
	height: 30%;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	height: 100%;
	width: 65%;
	gap: 0.8rem;
`;
export const PriceBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	height: 60%;
	width: 30%;
	font-size: 1.6rem;
	color: ${(props) => props.theme.colors.primaryLight};
	font-weight: 500;
`;

export const InfoBoxTitle = styled.h3`
	color: #333;
	font-size: 1.6rem;
	font-weight: 500;
	text-align: left;
	text-transform: capitalize;
`;

export const InfoBoxIcons = styled.div`
	display: flex;
	width: 100%;
	gap: 0.8rem;
	color: ${(props) => props.theme.colors.greyLight};
	font-size: 1.2rem;
	text-align: left;
`;
