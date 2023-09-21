import {useCallback, useState} from 'react';

export const useProfileHooks = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('On');
  const [selectedId, setSelectedId] = useState('1');
  const onPressItem = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible]);

  const onClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onPressRadio = useCallback((id: string, value: string) => {
    setSelectedId(id);
    setSelectedType(value);
    setModalVisible(false);
  }, []);

  return {
    onPressItem,
    modalVisible,
    selectedType,
    selectedId,
    onClose,
    onPressRadio,
  };
};
