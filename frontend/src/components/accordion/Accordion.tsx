import React, { FC, useState } from 'react';
import {
  AccordionBody, AccordionHeader, AccordionItem
} from './Accordion.styled';

interface Props {
  id: number;
  header: string;
  body: string;
}

const Accordion: FC<Props> = ({ id, header, body }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <AccordionItem key={id}>
      <AccordionHeader onClick={() => { setOpen(prev => !prev) }}>
        {header}
        {open ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
      </AccordionHeader>
      <AccordionBody className={open ? 'open' : 'closed'}><span>{body}</span></AccordionBody>
    </AccordionItem>
  );
};

export default Accordion;
