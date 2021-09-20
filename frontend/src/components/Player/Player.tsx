import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { useAppContext } from '../../context/AppContext';
import { PlayerClose, PlayerInner, PlayerOverlay } from './Player.styled';

interface Props {}
export const Player: FC<Props> = () => {
  const { showPlayer, setShowPlayer } = useAppContext();

  return showPlayer
    ? ReactDOM.createPortal(
        <PlayerOverlay onClick={() => setShowPlayer(false)} data-testid="player">
          <PlayerInner>
            <video controls autoPlay onClick={(e) => { e.stopPropagation() }}>
              <source src={`/videos/joker.mp4`} type="video/mp4" />
            </video>
            <PlayerClose />
          </PlayerInner>
        </PlayerOverlay>,
        document.body
      )
    : null;
};
export default Player;
