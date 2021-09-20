import React, { FC } from 'react';
import Jumbotron from './Jumbotron';
import { StyledJumbotronContainer } from './Jumbotron.styled';
import jumbotronItems from '../../staticData/jumbo.json';

interface Props {}

const JumbotronContainer: FC<Props> = () => {
  return (
    <StyledJumbotronContainer>
       {jumbotronItems.map((item) => (
          <Jumbotron key={item.id} {...item} />
        ))}
    </StyledJumbotronContainer>
  );
};

export default JumbotronContainer;
