import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'beige',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'yellowgreen',
    marginHorizontal: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: 'yellowgreen',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  }
};

const Button = props => (
  <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
    <Text style={styles.textStyle}>{props.children}</Text>
  </TouchableOpacity>
);

export { Button };
