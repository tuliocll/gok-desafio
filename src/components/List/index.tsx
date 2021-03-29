import React from 'react';
import { ListRenderItemInfo, FlatList } from 'react-native';
import { NoItems } from '../NoItems';

type ListRenderItem<T> = (
  info: ListRenderItemInfo<T>,
) => React.ReactElement | null;

interface IList<T> {
  items: Array<T>;
  renderItem: ListRenderItem<T>;
  loading?: boolean;
  testID?: string;
}

export function List<T>({
  items,
  renderItem,
  loading,
  testID,
}: IList<T>): React.ReactElement {
  return (
    <FlatList
      testID={testID}
      data={items}
      renderItem={renderItem}
      ListEmptyComponent={<NoItems testID="no-itens" isLoading={loading} />}
    />
  );
}
