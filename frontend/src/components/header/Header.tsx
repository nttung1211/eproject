import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HeaderBackground, StyledHeaderLogo } from './Header.styled';

interface Props {
  background?: boolean;
  slug?: string;
}

const Header: FC<Props> = ({
  children,
  background = true,
  slug,
}) => {
  return background ? (
    <HeaderBackground slug={slug}>
      {children}
    </HeaderBackground>
  ) : (
    <>{children}</>
  );
};

export default Header;

interface HeaderLogoProps {
  to: string;
  src: string;
  alt: string;
}

export const HeaderLogo: FC<HeaderLogoProps> = ({ to, src, alt }) => {
  return (
    <Link to={to}>
      <StyledHeaderLogo src={src} alt={alt} />
    </Link>
  );
};
