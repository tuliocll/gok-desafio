import styled from 'styled-components/native';

interface ITextStyleProps {
  isLink?: boolean;
}

export const TextStyled = styled.Text<ITextStyleProps>`
  color: #7e7e7e;
  font-size: 16px;
  font-family: 'Mulish';
  text-decoration: ${props => (props.isLink ? 'underline' : 'none')};
`;
