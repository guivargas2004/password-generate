import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from '../PassTextInput/PassTextInputStyles';

interface PassTextInputProps {
  pass:string
}

export function PassTextInput(props : PassTextInputProps) {
  return (
    <View style={styles.inputer}>
        <TextInput placeholder='Password'
        value={props.pass}></TextInput>

    </View>
  );
}