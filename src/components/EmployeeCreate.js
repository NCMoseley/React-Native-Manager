import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions/index';

const styles = {
  pickerTextStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
};

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    // The picker value is only populated if the picker is adjusted after render. The following will populate the default value to be "Monday" if the picker is not manipulated by the user. In JS, an empty string is a falsy value.
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="your name"
            value={this.props.name}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'name', value: text })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="###-####-#####"
            value={this.props.phone}
            onChangeText={text =>
              this.props.employeeUpdate({ prop: 'phone', value: text })
            }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: 'shift', value: day })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
