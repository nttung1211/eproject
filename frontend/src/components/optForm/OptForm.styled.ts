import styled from 'styled-components/macro';

export const OptFormFrame = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-direction: column;
`;

export const OptFormGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const OptFormInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: none;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  margin-bottom: 10px;
  
  @media (max-width: 576px) {
    max-width: 300px;
    height: 50px;
  }
`;

export const OptFormBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const OptFormButton = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: white;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

  &:hover {
    filter: brightness(.9);
  }

  @media (max-width: 1000px) {
    font-size: 16px;
    font-weight: bold;
  }

  @media (max-width: 576px) {
      height: 50px;
  }
`;

export const OptFormText = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  padding: 0 10px;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
