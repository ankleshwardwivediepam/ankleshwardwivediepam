import React, {useContext, useMemo} from 'react';
import {Text} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {styles} from '../../container/profile/style';
import {UserContext} from '../../container/profile/profile';

export default function CustomRadio({onPressRadio}: any) {
  const radioButtons: any = useMemo(
    () => [
      {
        id: '1',
        label: <Text style={{color: '#FFFFFF'}}>{'On'}</Text>,
        value: 'On',
        color: '#fff',
        selectedColor: 'red',
      },
      {
        id: '2',
        label: <Text style={{color: '#FFFFFF'}}>{'On Wifi Only'}</Text>,
        value: 'On Wifi Only',
        color: '#fff',
        selectedColor: 'red',
      },
      {
        id: '3',
        label: <Text style={{color: '#FFFFFF'}}>{'Off'}</Text>,
        value: 'Off',
        color: '#fff',
        selectedColor: 'red',
      },
    ],
    [],
  );
  const userId = useContext(UserContext);

  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={(id, value) => {
        onPressRadio(id, value);
      }}
      selectedId={userId}
      containerStyle={styles.radioContainer}
    />
  );
}
