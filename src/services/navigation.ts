import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(
  name: string,
  params?: Record<string, string>,
): boolean {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
  return true;
}
