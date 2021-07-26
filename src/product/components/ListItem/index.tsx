import {MaskRef} from 'core/interface/TextInputMask';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {IconButton, List, useTheme} from 'react-native-paper';

const ProductListItem: React.FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);
  const [edit, setEdit] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [value, setValue] = React.useState<string | undefined>('');
  const maskRef = React.useRef() as React.MutableRefObject<MaskRef>;

  React.useEffect(() => {
    if (edit) {
      maskRef.current.getElement().focus();
    }
  }, [edit]);

  if (edit) {
    return (
      <View style={styles.editableRow}>
        <TextInputMask
          type={'money'}
          ref={maskRef}
          maxLength={30}
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={() => {
            setChecked(true);
            setEdit(false);
          }}
        />
        <View style={styles.iconContainer}>
          <IconButton
            color={theme.colors.primary}
            icon="close"
            onPress={() => {
              setValue(undefined);
              setChecked(false);
              setEdit(false);
            }}
          />
          <IconButton
            color={theme.colors.primary}
            icon="check"
            onPress={() => {
              setChecked(true);
              setEdit(false);
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <List.Item
      title="Item 1"
      description={value}
      right={() => (
        <List.Icon
          color={theme.colors.primary}
          icon={checked ? 'checkbox-intermediate' : 'checkbox-blank-outline'}
        />
      )}
      onPress={() => setEdit(true)}
      style={styles.listItem}
    />
  );
};

const useStyles = (theme: ReactNativePaper.Theme) =>
  StyleSheet.create({
    listItem: {
      paddingVertical: 0,
    },
    editableRow: {
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    textInput: {
      flexGrow: 1,
    },
    iconContainer: {
      flexDirection: 'row',
    },
    icon: {
      backgroundColor: theme.colors.background,
    },
  });

export default ProductListItem;
