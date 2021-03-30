import React from 'react';
// eslint-disable-next-line import/no-duplicates
import { formatDistance, parseISO } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import ptbr from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ScrollView } from 'react-native-gesture-handler';
import {
  Text,
  Card,
  Col,
  Row,
  Label,
  IconButton,
} from '../../../../components';

import IRepository from '../../../../interfaces/IRepository';

import { Container, Name } from './style';
import textSplit from '../../../../utils/textSplit';
import { Tag } from '../../../../components/Tag';

interface IItemList {
  data: IRepository;
  onPress?: (id: number) => void;
  onTagPress?: (text: string) => void;
  onEdit?: (id: number) => void;
}

const ItemList = ({
  data,
  onPress,
  onTagPress,
  onEdit,
}: IItemList): React.ReactElement => {
  function itemClick() {
    if (onPress) {
      onPress(data.id);
    }
  }

  function editClick() {
    if (onEdit) {
      onEdit(data.id);
    }
  }

  return (
    <Card>
      <Container onPress={itemClick}>
        <Row>
          <Col style={{ width: '93%' }}>
            <Row>
              <Col style={{ marginTop: 10 }}>
                <Row
                  style={{
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Name>{textSplit(data.name, 25)}</Name>
                  <Icon name="chevron-right" size={25} />
                </Row>
                <Text style={{ color: '#000', marginTop: 7 }}>
                  {textSplit(data?.description, 50) ||
                    '(Descrição indisponivel)'}
                </Text>
              </Col>
            </Row>
          </Col>
          <Col style={{ marginTop: 10 }}>
            <IconButton
              iconName="star"
              iconColor="#FFC700"
              backgroundColor="rgba(255, 199, 0, 0.16)"
            />
          </Col>
        </Row>
        <Row style={{ alignItems: 'center', marginTop: 15 }}>
          <Col style={{ width: '85%', marginRight: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {data.tags &&
                data.tags.map(tag => (
                  <Tag key={tag} text={tag} onPress={onTagPress} />
                ))}
            </ScrollView>
          </Col>
          <Col>
            <IconButton
              iconName="pencil"
              iconColor="#fff"
              backgroundColor="#0017FF"
              iconSize={13}
              onPress={editClick}
            />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: 'space-between',
            marginTop: 25,
            marginBottom: 15,
          }}>
          <Label text={data.language} iconName="web" />
          <Label text={data.stargazers_count} iconName="star" />
          <Label text={data.watchers} iconName="account-supervisor" />
          <Label
            text={
              data.updated_at &&
              formatDistance(parseISO(data.updated_at), new Date(), {
                addSuffix: true,
                locale: ptbr,
              }).replace('cerca de ', '')
            }
            iconName="clock-outline"
          />
        </Row>
      </Container>
    </Card>
  );
};

export default ItemList;
