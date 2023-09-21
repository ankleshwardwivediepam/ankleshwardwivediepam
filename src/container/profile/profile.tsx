import React, {createContext, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Switch,
  Modal,
} from 'react-native';
import {AppSettingModel} from '../../model/profile';
import {styles} from './style';
import {useProfileHooks} from '../../hooks';
import CustomRadio from '../../component/CustomRadio/CustomRadio';
export const UserContext = createContext('On');

interface ProfileViewProps {
  model: AppSettingModel[];
  title: string;
}

export const ProfileView: React.FC<ProfileViewProps> = (
  props: ProfileViewProps,
) => {
  const {model} = props;
  const {
    selectedType,
    selectedId,
    modalVisible,
    onPressItem,
    onClose,
    onPressRadio,
  } = useProfileHooks();

  const renderItem = useCallback(
    ({item, index}: any) => {
      return (
        <TouchableOpacity onPress={() => (index === 0 ? onPressItem() : null)}>
          <View style={styles.listItem}>
            <View style={styles.textView}>
              <Text style={styles.textTitle}>{item.title}</Text>
              {index === 0 && (
                <Text style={styles.textTitle}>{selectedType}</Text>
              )}
            </View>
            <View style={styles.iconView}>
              {item.iconType === '2' && (
                <Switch
                  trackColor={{false: 'red', true: 'green'}}
                  thumbColor={'white'}
                  ios_backgroundColor={'black'}
                  onValueChange={() => {
                    console.log('');
                  }}
                />
              )}
            </View>
          </View>
        </TouchableOpacity>
      );
    },
    [onPressItem, selectedType],
  );

  const itemSeparator = () => <View style={styles.separator} />;

  const renderHeaderView = useMemo(
    () => (
      <View style={styles.headerView}>
        <Text style={styles.textStyle}>{'My Reuters App'}</Text>
      </View>
    ),
    [],
  );

  const renderSignInView = useMemo(
    () => (
      <View style={styles.bottomView}>
        <TouchableOpacity>
          <Text style={styles.buttonStyle}>{'Sign In'}</Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );
  const renderMarketView = useMemo(
    () => (
      <View style={styles.txtBtnStyle}>
        <Text style={styles.txtStyle}>{'My Markets'}</Text>
        <TouchableOpacity>
          <Text style={styles.txtSubTitleStyle}>
            {'Watchlist, Stocks, Bonds, Currencies, +1 '}
          </Text>
        </TouchableOpacity>
      </View>
    ),
    [],
  );

  return (
    <UserContext.Provider value={selectedId}>
      <View style={styles.mainContainer}>
        {renderHeaderView}
        {renderSignInView}
        {renderMarketView}
        <Text style={styles.listTitle}>{'App Settings'}</Text>
        <FlatList
          data={model}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ItemSeparatorComponent={itemSeparator}
        />
        <Modal transparent visible={modalVisible} onRequestClose={onClose}>
          <View style={styles.radioView}>
            <Text style={styles.txtRadio}>{'Video AutoPlay'}</Text>
            <CustomRadio onPressRadio={onPressRadio} />
          </View>
        </Modal>
      </View>
    </UserContext.Provider>
  );
};
