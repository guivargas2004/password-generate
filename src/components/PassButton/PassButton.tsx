import React, {useState} from 'react';
import {Text, Pressable } from 'react-native';

import { styles } from './PassButtonStyle';
import { PassTextInput } from '../PassTextInput/PassTextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';

export function PassButton() {

  const [pass, setPass] = useState('')

 function HandlePassword() {
  let generateToken = generatePass()
    setPass(generateToken)
  }

  function HandleCopyButton() {
    Clipboard.setStringAsync(pass)
  }

  return (
    <>

          <PassTextInput pass={pass}/>

        <Pressable  onPress={HandlePassword}
            style={styles.button}>
            <Text style={styles.text}> GENERATE PASSWORD</Text>
        </Pressable>


        <Pressable onPress={HandleCopyButton}
            style={styles.button}>
            <Text style={styles.text}>COPY PASSWORD</Text>

        </Pressable>
    </>
  );
}