import VisibilityIcon from '@mui/icons-material/Visibility';
import { Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useAppContext } from '../../context/AppContext';
import { useCardFeatureContext } from '../../context/CardFeatureContext';
import viewService from '../../services/viewService';
import { capitalize } from '../../utils/helpers';
import {
  CardFeatureClose,
  CardFeatureContent,
  CardFeatureGenre,
  CardFeaturePlayButton,
  CardFeatureText,
  CardFeatureTitle,
  CardFeatureViews,
  CardMaturity,
  StyledCardFeature,
} from './Card.styled';

interface Props {}

const CardFeature: FC<Props> = () => {
  const { showFeature, itemFeature, setShowFeature } = useCardFeatureContext();
  const { setShowPlayer, setPlayingFilm, currentUser } = useAppContext();
  const [viewCount, setViewCount] = useState<number | null>(null);

  const onPlay = () => {
    viewService.createView({
      filmId: itemFeature!.id!,
      userId: currentUser!.id!,
    });
    setPlayingFilm(itemFeature);
    setShowPlayer((prev) => !prev);
    setShowFeature(false);
  };

  useEffect(() => {
    window.onscroll = () => {
      setShowFeature(false);
    };
  }, [setShowFeature]);

  useEffect(() => {
    if (showFeature && itemFeature) {
      viewService.getViewCountByFilmId(itemFeature.id!).then((data) => {
        setViewCount(data.count);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFeature]);

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
          <CardFeatureViews>
            <VisibilityIcon sx={{ margin: '0px 10px 0px 0px' }} />
            <Typography>{viewCount}</Typography>
          </CardFeatureViews>
          <CardFeaturePlayButton onClick={onPlay}>Play</CardFeaturePlayButton>
        </CardFeatureContent>
      </StyledCardFeature>
    </OutsideClickHandler>
  ) : null;
};

export default CardFeature;
