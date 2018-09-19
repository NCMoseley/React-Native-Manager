import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';

import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions/index';

const styles = {
  pickerTextStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
};

class EmployeeCreate extends Component {
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
          <Button>Create</Button>
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
  { employeeUpdate }
)(EmployeeCreate);
