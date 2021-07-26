import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, useTheme} from 'react-native-paper';
import {StackHeaderProps} from '@react-navigation/stack';

const BackHeader: React.FC<StackHeaderProps> = ({navigation, scene}) => {
  const {options} = scene.descriptor;
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Appbar.Header style={styles.header}>
      <View style={styles.flex}>
        <Appbar.BackAction onPress={navigation.goBack} color="#fff" />
      </View>
      <Text style={styles.text}>{options.title}</Text>
      <View style={styles.flex} />
    </Appbar.Header>
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    header: {
      paddingTop: 5,
      height: 60,
      backgroundColor: theme.colors.primary,
      elevation: 0,
    },
    text: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    flex: {flex: 1},
  });

export default BackHeader;
