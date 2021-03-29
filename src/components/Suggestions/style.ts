import styled from 'styled-components/native';
import { Text as TextComponent } from '../Text';
import { Row } from '../Row';
import { Tag as TagComponent } from '../Tag';

export const Container = styled.View`
  background: #fff;
  align-content: flex-start;
  padding: 10px 0px;
`;

export const Text = styled(TextComponent)`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const TagContainer = styled(Row)`
  flex-wrap: wrap;
`;

export const Tag = styled(TagComponent)`
  margin: 5px;
`;
