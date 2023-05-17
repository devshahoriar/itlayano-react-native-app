import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { gray } from '../../utils/th';

const Rail = () => {
  return (
    <View style={styles.root}/>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 4,
    borderRadius: 2,
    backgroundColor: gray,
  },
});
