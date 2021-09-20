import styled from 'styled-components/macro';

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 0 0 0;
`;

export const FeatureTitle = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 62px;
  font-weight: 900;
  margin: auto;

  @media (max-width: 1000px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const FeatureSubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
