import React, { FC, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { CardRowButton, StyledCardContainer } from './Card.styled';

interface Props {}

const CardContainer: FC<Props> = ({ children }) => {
  const scrollContainerRef = useRef<HTMLElement>();
  const distance = 300;

  const scrollHandler = (direction: 'left' | 'right') => {
    scrollContainerRef.current?.scrollBy({
      left: direction === 'right' ? distance : distance * -1,
      behavior: 'smooth',
    });
  };

  return (
    <StyledCardContainer>
      <ScrollContainer
        innerRef={scrollContainerRef as React.Ref<HTMLElement>}
        className="scroll-container d-flex"
        vertical={false}
      >
        {children}
      </ScrollContainer>
      <CardRowButton direction="left"  onClick={() => { scrollHandler('left') }}>
        <img src="/images/icons/chevron-right.png" alt="prev" />
      </CardRowButton>
      <CardRowButton direction="right"  onClick={() => { scrollHandler('right') }}>
        <img src="/images/icons/chevron-right.png" alt="next" />
      </CardRowButton>
    </StyledCardContainer>
  );
};

export default CardContainer;