import React from 'react';

import {
	ReviewCardContainer
} from './styles';


interface IReviewProps {
	name: string;
	rating: number;
	text: string;
};

const ReviewCard: React.FC<IReviewProps> = ({name, rating, text}: IReviewProps) => {


	return (
		<ReviewCardContainer>

		</ReviewCardContainer>
	)
}

export default ReviewCard;
