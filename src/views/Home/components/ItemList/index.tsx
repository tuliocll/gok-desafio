import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Text,
  Avatar,
  Card,
  Col,
  Row,
  Label,
  IconButton,
} from '../../../../components';

import IUser from '../../../../interfaces/IUser';

import { Container, Name } from './style';
import textSplit from '../../../../utils/textSplit';

interface IItemList {
  data: IUser;
  onPress?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const ItemList = ({
  data,
  onPress,
  onDelete,
}: IItemList): React.ReactElement => {
  function itemClick() {
    if (onPress) {
      onPress(data.id);
    }
  }

  function itemDelete() {
    if (onDelete) {
      onDelete(data.id);
    }
  }

  return (
    <Card>
      <Container onPress={itemClick}>
        <Row style={{ marginTop: 15 }}>
          <Col style={{ width: '93%' }}>
            <Row>
              <Avatar imageUrl={data.avatar_url} />
              <Col style={{ marginLeft: 15, marginTop: 10 }}>
                <Row style={{ alignItems: 'center', marginBottom: 5 }}>
                  <Name>{textSplit(data.name, 15)}</Name>
                  <Icon name="chevron-right" size={25} />
                </Row>
                <Text style={{ color: '#000' }}>{data.login}</Text>
              </Col>
            </Row>
          </Col>
          <Col style={{ marginTop: 10 }}>
            <IconButton iconName="delete" onPress={itemDelete} />
          </Col>
        </Row>
        <Row
          style={{
            justifyContent: 'space-between',
            marginTop: 25,
            marginBottom: 15,
            width: '90%',
          }}>
          <Label text={data.company || 'Nenhuma'} iconName="domain" />
          <Label
            text={data?.location?.slice(0, 15) || 'Nenhuma'}
            iconName="map-marker"
          />
          <Label text={data.followers} iconName="star" />
        </Row>
      </Container>
    </Card>
  );
};

export default ItemList;
