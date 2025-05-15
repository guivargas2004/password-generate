import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // Alinha verticalmente
    alignItems: 'center',
  },
  
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  },

  lock: {
    resizeMode: 'contain',
    height: 120,
  }

  
}
);