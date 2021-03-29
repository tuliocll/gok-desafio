import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  border: 1px solid;
  border-color: #e5e5e5;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 7px 20px;
  border-radius: 4px;
  margin: 12px 0px;
`;

export const InputText = styled.TextInput`
  font-size: 16px;
  color: #7e7e7e;
  font-family: 'Mulish';
`;

export const AccountIcon = styled(Icon)`
  color: #e5e5e5;
  font-size: 22px;
  margin-right: 5px;
`;
