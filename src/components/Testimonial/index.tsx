import React from 'react';

import { FaStar } from 'react-icons/fa';

import {
	Card,
	Profile,
	Photo,
	NameTitle,
	PhotoContainer,
	TextContainer,
	RatingContainer
} from './styles';

interface IReviewProps {
	name: string;
	rating: number;
	text: string;
	profile_photo: string;
};

const Testimonial: React.FC<IReviewProps> = ({name, rating, text, profile_photo}: IReviewProps) => {


	return (
		<Card>
			<Profile>
				<PhotoContainer>
					<Photo src={profile_photo} alt={name} />
				</PhotoContainer>
				<NameTitle>{name}</NameTitle>
				<RatingContainer>
					<FaStar color="#f09830" size={16}/>
					<FaStar color="#f09830" size={16}/>
					<FaStar color="#f09830" size={16}/>
					<FaStar color="#f09830" size={16}/>
					<FaStar color="#f09830" size={16}/>
				</RatingContainer>
				<TextContainer>
					<h3>
						"{text}"
					</h3>
				</TextContainer>
			</Profile>
		</Card>
	)
}

export default Testimonial;
