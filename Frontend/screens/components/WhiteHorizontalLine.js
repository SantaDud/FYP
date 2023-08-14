import React from 'react';
import { View, StyleSheet } from 'react-native';

const WhiteHorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    
    width: '100%',
    height: 1,
    backgroundColor: 'white',
  },
});

export default WhiteHorizontalLine;
