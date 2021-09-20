import React, { FC, useContext } from 'react';
import Film from '../../models/Film';
import { CardImage, CardMeta, CardText, CardTitle, StyledCardItem } from './Card.styled';
import { CardFeatureContext } from './CardRow';

interface Props {
  item: Film;
}

const Card: FC<Props> = ({ item }) => {
  const { setShowFeature, setItemFeature } = useContext(CardFeatureContext);

  const handleClick = () => {
    setItemFeature(item);
    setShowFeature(true);
  };

  return (
    <StyledCardItem onMouseUp={handleClick}>
      <CardImage src={`/images/films/${item.slug}/small.jpg`} />
      <CardMeta>
        <CardTitle>{item.title}</CardTitle>
        <CardText>{item.description}</CardText>
      </CardMeta>
    </StyledCardItem>
  );
};

export default Card;
