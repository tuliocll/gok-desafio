import styled from 'styled-components/native';

interface IContainerProps {
  ios: boolean;
}

export const Container = styled.View<IContainerProps>`
  background: #fff;
  padding: 20px;
  margin: 8px;
  border-radius: 8px;
  elevation: 5;
  box-shadow: ${({ ios }) =>
    ios ? '0px 2px 4px rgba(0, 0, 0, 0.08);' : 'none'};
`;
