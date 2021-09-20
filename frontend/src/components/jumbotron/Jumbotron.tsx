import React, { FC } from 'react';
import {
  JumbotronInner,
  JumbotronItem,
  JumbotronPane,
  JumbotronTitle,
  JumbotronSubTitle,
  JumbotronImage,
} from './Jumbotron.styled';

interface Props {
  id: number;
  title: string;
  subTitle: string;
  image: string;
  alt: string;
  direction: string;
}

const Jumbotron: FC<Props> = ({ direction, title, subTitle, image, alt }) => {
  return (
    <JumbotronItem>
      <JumbotronInner direction={direction}>
        <JumbotronPane>
          <JumbotronTitle>{title}</JumbotronTitle>
          <JumbotronSubTitle>{subTitle}</JumbotronSubTitle>
        </JumbotronPane>
        <JumbotronPane>
          <JumbotronImage src={image} alt={alt} />
        </JumbotronPane>
      </JumbotronInner>
    </JumbotronItem>
  ); 
};
export default Jumbotron;
