import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

interface IContainerProps {
  isLoading?: boolean;
}

export const Container = styled.View<IContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: ${({ isLoading }) => (isLoading ? '0px' : '200px')};
`;
