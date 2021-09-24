import React, { FC } from 'react';
import { useCardFeatureContext } from '../../context/CardFeatureContext';
import Film from '../../models/Film';
import { CardImage, CardMeta, CardText, CardTitle, StyledCardItem } from './Card.styled';
import CardFavoriteButton from './CardFavoriteButton';

interface Props {
  item: Film;
}

const Card: FC<Props> = ({ item }) => {
  const { setShowFeature, setItemFeature } = useCardFeatureContext();

  const handleClick = () => {
    setItemFeature(item);
    setShowFeature(true);
  };

  return (
    <StyledCardItem onClick={handleClick}>
      <CardFavoriteButton filmId={item.id!} />
      <CardImage src={`/images/films/${item.slug}/small.jpg`} />
      <CardMeta>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardMeta>
    </StyledCardItem>
  );
};

export default Card;
