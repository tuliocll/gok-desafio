import styled from 'styled-components/native';

interface IImageProps {
  size?: number;
}

export const Image = styled.Image<IImageProps>`
  width: ${({ size }) => (size ? `${size}px` : '70px')};
  height: ${({ size }) => (size ? `${size}px` : '70px')};
  border-radius: 50px;
`;
