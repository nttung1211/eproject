import { IconButton, Tooltip } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import favoriteService from '../../services/favoriteService';
import { StyledCardFavoriteButton } from './Card.styled';

interface Props {
  filmId: number;
  size?: 'small' | 'medium' | 'large' | undefined;
}

const CardFavoriteButton: FC<Props> = ({ filmId, size }) => {
  const { currentUser, setCurrentUser } = useAppContext();
  const [isAddMode, setIsAddMode] = useState(true);
  const [favoriteId, setFavoriteId] = useState<number>(0);

  const handleToggleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (!currentUser) {
      return;
    }
    if (isAddMode) {
      favoriteService.createFavorite({ userId: currentUser.id!, filmId }).then((data) => {
        setCurrentUser((prev) => ({ ...prev!, favorites: [...prev?.favorites!, data] }));
        setIsAddMode(false);
        setFavoriteId(data.id!);
      });
    } else {
      favoriteService.deleteFavorite(favoriteId).then(() => {
        setCurrentUser((prev) => ({
          ...prev!,
          favorites: prev?.favorites!.filter((favorite) => favorite.id !== favoriteId)!,
        }));
        setIsAddMode(true);
      });
    }
  };

  useEffect(() => {
    const isAdded = currentUser?.favorites!.some((fav) => {
      if (fav.filmId === filmId) {
        setFavoriteId(fav.id!);
        return true;
      }
      return false;
    });
    if (isAdded) {
      setIsAddMode(false);
    }
  }, [currentUser?.favorites, setIsAddMode, filmId]);

  return (
    <StyledCardFavoriteButton>
      <Tooltip  title={isAddMode ? 'Add to favorites' : 'Remove from favorite'} placement="top">
        <IconButton
          size={size}
          color="primary"
          onClick={handleToggleFavorite}
          sx={{
            color: '#ffffff',
          }}
        >
          {isAddMode ? <AddCircleIcon /> : <RemoveCircleIcon />}
        </IconButton>
      </Tooltip>
    </StyledCardFavoriteButton>
  );
};

export default CardFavoriteButton;
