import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IContainerProps {
  ios: boolean;
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  background-color: #fff;
  padding: 10px 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-left: 10px;
  elevation: 5;
  box-shadow: ${({ ios }) =>
    ios ? '0px 2px 4px rgba(0, 0, 0, 0.08);' : 'none'};
`;

export const Icon = styled(MaterialIcons)`
  font-size: 25px;
  color: #7e7e7e;
`;
