import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {Colors} from '../../Themes';

export default (props) => {
  if (props.loading) {
    return (
      <View style={styles.viewloading}>
        <ActivityIndicator size="large" color={Colors.third} />
      </View>
    );
  } else {
    return null;
  }
};
