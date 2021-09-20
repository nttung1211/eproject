import React, { FC } from 'react';
import Accordion from './Accordion';
import {
  AccordionFrame,
  AccordionInner,
  AccordionTitle,
  StyledAccordionContainer,
} from './Accordion.styled';
import faqsData from '../../staticData/accordion.json';
import OptForm from '../optForm/OptForm';

interface Props {}

const AccordionContainer: FC<Props> = () => {
  return (
    <StyledAccordionContainer>
      <AccordionFrame>
        <AccordionInner>
          <AccordionTitle>Frequently Asked Questions</AccordionTitle>
          {faqsData.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </AccordionInner>
        <OptForm />
      </AccordionFrame>
    </StyledAccordionContainer>
  );
};

export default AccordionContainer;
