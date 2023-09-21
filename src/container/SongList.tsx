import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useState, useEffect} from 'react';

export const SongList = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    const url = 'https://dummyjson.com/products';
    let result = await fetch(url);
    result = await result.json();
    const {products} = result;
    console.log('url', result);
    setData(products);
  };
  useEffect(() => {
    setTimeout(async () => {
      await getData();
    }, 2000);
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <View style={{height: 60, backgroundColor: '#0f0'}}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};
