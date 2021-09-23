import styled from 'styled-components/macro';

export const PlayerContainer = styled.div``;

export const PlayerOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  padding: 0 20px;
`;

export const PlayerInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const PlayerClose = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

