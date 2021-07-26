import React from 'react';
import {View} from 'react-native';
// import MapView, {UrlTile} from 'react-native-maps';
import {TextInput} from 'react-native-paper';

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const EstablishmentCreate: React.FC = () => {
  return (
    <View>
      <TextInput label="Nome" mode="outlined" dense />
      <TextInput label="Localização" mode="outlined" dense />
    </View>
  );
};

// const useStyles = () =>
//   StyleSheet.create({
//     map: {
//       width: '100%',
//       height: '100%',
//     },
//   });

export default EstablishmentCreate;
