import styled from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IContainerProps {
  ios: boolean;
}

export const Container = styled.View<IContainerProps>`
  background-color: #fff;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 20px;
  border-radius: 6px;
  elevation: 5;
  box-shadow: ${({ ios }) =>
    ios ? '0px 2px 4px rgba(0, 0, 0, 0.08);' : 'none'};
  margin-bottom: 10px;
`;

export const TextInput = styled.TextInput`
  color: #7e7e7e;
  font-size: 18px;
  font-family: 'Mulish';
  padding: 0px;
`;

export const Icon = styled(MaterialIcon)`
  color: #7e7e7e;
  font-size: 25px;
  margin-right: 10px;
`;
