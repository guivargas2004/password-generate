import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './HomeStyle';
import {Logo} from '../../components/Logo/Logo'
import { PassTextInput } from '../../components/PassTextInput/PassTextInput';
import { PassButton } from '../../components/PassButton/PassButton';


export default function Home(){
    return(
       <View style={styles.appcontainer}>

          <View style={styles.LogoContainer}>
              <Logo/>
          </View>

          <View style={styles.inputContainer}>
          
            <PassButton/>
          </View>

         
             
             <StatusBar style="auto" />
        </View>
    )
};


