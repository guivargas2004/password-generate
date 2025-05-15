import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './LogoStyle';
import password from '../../../assets/images/password.png';

export function Logo() {
  return (
    <View style={styles.container} >
        <Text style={styles.title}>PASSWORD GENERATOR</Text>
        <Image 
        style={styles.lock}
        source={password}/>

    </View>
  );
}