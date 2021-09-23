import React, { FC, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useAppContext } from '../../context/AppContext';
import { useCardFeatureContext } from '../../context/CardFeatureContext';
import { capitalize } from '../../utils/helpers';
import {
  CardFeatureClose,
  CardFeatureContent,
  CardFeatureGenre,
  CardFeaturePlayButton,
  CardFeatureText,
  CardFeatureTitle,
  CardMaturity,
  StyledCardFeature,
} from './Card.styled';

interface Props {}

const CardFeature: FC<Props> = () => {
  const { showFeature, itemFeature, setShowFeature } = useCardFeatureContext();
  const { setShowPlayer, setPlayingFilm } = useAppContext();

  const onPlay = () => {
    setPlayingFilm(itemFeature);
    setShowPlayer((prev) => !prev);
    setShowFeature(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      setShowFeature(false);
    }
  }, [setShowFeature]);

  return showFeature && itemFeature ? (
    <OutsideClickHandler onOutsideClick={() => setShowFeature(false)}>
      <StyledCardFeature src={`/images/films/${itemFeature.slug}/large.jpg`}>
        <CardFeatureContent>
          <CardFeatureTitle>{itemFeature.title}</CardFeatureTitle>
          <CardFeatureText>{itemFeature.description}</CardFeatureText>
          <CardFeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </CardFeatureClose>

          <CardFeatureGenre>
            <CardMaturity rating={itemFeature.maturity}>
              {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
            </CardMaturity>
            <CardFeatureText fontWeight="bold">
              {itemFeature.genres.map((genre, index) => {
                const genreName = capitalize(genre.name);
                if (index === itemFeature.genres.length - 1) {
                  return genreName + '.';
                }
                return genreName + ', ';
              })}
            </CardFeatureText>
          </CardFeatureGenre>

          <CardFeaturePlayButton onClick={onPlay}>Play</CardFeaturePlayButton>
        </CardFeatureContent>
      </StyledCardFeature>
    </OutsideClickHandler>
  ) : null;
};

export default CardFeature;
