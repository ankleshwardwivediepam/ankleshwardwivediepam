/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext} from 'react';
import {View} from 'react-native';
import {ProfileView} from './src/container/profile/profile';
import {mockData} from './src/container/profile/data';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <ProfileView model={mockData} title={'My Reuters App'} />
    </View>
  );
}

export default App;
