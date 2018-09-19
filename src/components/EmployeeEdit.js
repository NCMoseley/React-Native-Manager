import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Modal } from 'react-native';
import _ from 'lodash';
import Communications from 'react-native-communications';

import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeFrom from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `You better be at work on ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <Card>
        <EmployeeFrom {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Delete
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>

        <Confirm
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          visible={this.state.showModal}
        >
          Are you sure you want to delete this employee?
        </Confirm>
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
  { employeeUpdate, employeeSave, employeeDelete }
)(EmployeeEdit);
