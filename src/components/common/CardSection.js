import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

const CardSection = props => (
  // Adding an array allows us to make use of styles sent through props. The rightmost style will overwrite any styles to the left.
  <View style={[styles.containerStyle, props.style]}>{props.children}</View>
);

export { CardSection };
