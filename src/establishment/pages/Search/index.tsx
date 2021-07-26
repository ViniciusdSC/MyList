import React from 'react';
import {StyleSheet, ScrollView, TextInput as RefTextInput} from 'react-native';
import {TextInput, useTheme, List} from 'react-native-paper';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'routes';

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: theme.colors.background,
    },
    listItem: {
      paddingVertical: 0,
    },
  });

type CartIndexProps = {
  navigation: StackNavigationProp<RootStackParamList, 'EstablishmentSearch'>;
};

const EstablishmentSearch: React.FC<CartIndexProps> = ({navigation}) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [value, setValue] = React.useState('');
  const inputRef = React.useRef() as React.RefObject<RefTextInput>;

  function handleAddEstablishment() {
    console.log('handleAddEstablishment');
    navigation.push('EstablishmentCreate');
  }

  React.useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [inputRef]);

  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Digite um estabelecimento"
        mode="outlined"
        dense
        value={value}
        onChangeText={setValue}
        ref={inputRef}
      />
      <List.Section>
        <List.Item
          title={value ? value : 'Adicionar novo estabelecimento'}
          left={() => <List.Icon color={theme.colors.primary} icon="plus" />}
          onPress={handleAddEstablishment}
          style={styles.listItem}
        />
      </List.Section>
    </ScrollView>
  );
};

export default EstablishmentSearch;
