import {FAB, IconButton, List, Portal, useTheme} from 'react-native-paper';
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from 'routes';
// import {Establishment} from 'establishment/store';
import {useCurrentEstablishment} from 'core/store/current-establishment/selectors';
import {useIsFocused} from '@react-navigation/native';
import ProductListItem from 'product/components/ListItem';

type CartIndexProps = {
  navigation: StackNavigationProp<RootStackParamList, 'CartIndex'>;
};

const CartIndex: React.FC<CartIndexProps> = ({navigation}) => {
  const isFocused = useIsFocused();
  const theme = useTheme();
  const styles = useStyles(theme);
  const [fabOpen] = React.useState(false);
  const establishment = useCurrentEstablishment();

  function handleFinishPurchase() {
    console.log('handleFinishPurchase');
  }

  function handleAddListItem() {
    console.log('handleAddListItem');
  }

  return (
    <ScrollView style={styles.container}>
      <List.Section>
        <List.Subheader>Estabelecimento</List.Subheader>
        <List.Item
          title={
            establishment ? establishment.name : 'Escolha um estabelecimento'
          }
          left={() => <List.Icon color={theme.colors.primary} icon="store" />}
          right={() => (
            <List.Icon color={theme.colors.primary} icon="chevron-right" />
          )}
          onPress={() => navigation.push('EstablishmentSearch')}
          style={styles.listItem}
        />
      </List.Section>
      <List.Section>
        <View style={styles.subheaderContainer}>
          <List.Subheader style={styles.subheader}>Lista atual</List.Subheader>
          <IconButton
            size={20}
            style={styles.subheaderIconbutton}
            icon="plus"
            onPress={handleAddListItem}
          />
        </View>

        <ProductListItem />
      </List.Section>
      {isFocused && (
        <Portal>
          <FAB
            color={theme.colors.accent}
            icon="check"
            onPress={handleFinishPurchase}
            visible={fabOpen}
          />
        </Portal>
      )}
    </ScrollView>
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: theme.colors.background,
    },
    subheader: {},
    listItem: {
      paddingVertical: 0,
    },
    subheaderIconbutton: {
      alignSelf: 'flex-end',
      marginLeft: 'auto',
    },
    subheaderContainer: {
      flexDirection: 'row',
      paddingRight: 15,
    },
  });

export default CartIndex;
