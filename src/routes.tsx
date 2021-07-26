import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from 'core/components/Header';
import CartIndex from 'cart/pages/Index';
import EstablishmentSearch from 'establishment/pages/Search/index';
import BackHeader from 'core/components/BackHeader';
import EstablishmentCreate from 'establishment/pages/Create';

export type RootStackParamList = {
  CartIndex: undefined;
  EstablishmentSearch: undefined;
  EstablishmentCreate: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CartIndex"
          component={CartIndex}
          options={{
            header: Header,
            title: 'Lista de compras',
          }}
        />
        <Stack.Screen
          name="EstablishmentSearch"
          component={EstablishmentSearch}
          options={{
            header: BackHeader,
            title: 'Estabelecimentos',
          }}
        />
        <Stack.Screen
          name="EstablishmentCreate"
          component={EstablishmentCreate}
          options={{
            header: BackHeader,
            title: 'Novo Estabelecimento',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
