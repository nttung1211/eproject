import styled from 'styled-components/macro';

export const CardRowTitle = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;

export const StyledCardRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  > ${CardRowTitle} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const CardRowContainer = styled.div`
  display: flex;
  flex-direction: column;

  > ${StyledCardRow}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;

export const CardTitle = styled.p`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  /* display: none; */
`;

export const CardText = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
  /* display: none; */
`;

export const CardRowButton = styled.button
<{
  direction: 'left' | 'right'
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  ${({ direction }) => direction === 'left' ?  'left: 0px' : 'right: 0px'}; 
  z-index: 999;
  ${({ direction }) => direction === 'left' ?  'left: 0px' : 'right: 0px'}; 
  transform: ${({ direction }) => direction === 'left' ?  'translate(-50%, -50%) rotate(180deg)' : 'translate(50%, -50%)'};
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
  background: white;
  border-radius: 50%;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    opacity: 1 !important;
  }
  
  img {
    filter: brightness(0) invert(0);
    width: 25px;
  }
`

export const StyledCardContainer = styled.div`
  position: relative;
  margin: 0 56px;

  &:hover ${CardRowButton} {
    opacity: .3;
  }
  
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const CardMeta = styled.div`
  /* display: none; */
  max-height: 0;
  opacity: 0;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
  transition: .3s;
`;

export const CardImage = styled.img`
  border: 0;
  width: 300px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export const StyledCardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    z-index: 99;
  }

  &:hover ${CardMeta} {
    height: auto;
    max-height: 100%;
    opacity: 1;
  }
`;

export const CardFeatureText = styled.p
<{ 
  fontWeight?: string 
}>`
  font-size: 18px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin: 0;

  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const StyledCardFeature = styled.div
<{
  src: string;
}>`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    height: auto;
    background-size: auto;

    ${CardRowTitle} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
    ${CardFeatureText} {
      font-size: 14px;
    }
  }
`;

export const CardFeatureTitle = styled(CardRowTitle)`
  margin-left: 0;
`;

export const CardFeatureClose = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const CardFeatureContent = styled.div`
  margin: 56px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;

export const CardFeatureGenre = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0;

  > ${StyledCardRow}:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -100px;
    }
  }
`;

export const CardFeaturePlayButton = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  &:hover {
    filter: brightness()
  }
`;

export const CardMaturity = styled.div
<{
  rating: number;
}>`
  background-color: ${({ rating }) => (rating >= 15 ? '#f44336' : '#2f9600')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;
