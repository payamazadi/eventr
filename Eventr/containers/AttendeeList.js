import React from "react";
import { Alert, Text } from "react-native";
import { connect } from "react-redux";
import { AttendeeList } from "pages";
import { attendeeListLoad } from "../actions/attendees";


class AttendeeListContainer extends React.Component {
  /*
  static navigationOptions = { header: null };

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPhoneVerified) {
      NavigationHelper.navigateTo(ROUTES.CONFIRMATION);
    }
  }

  render() {
    return (
      <Welcome
        {...this.props}
        onSubmit={() => {
          this.props.validatePhoneAction(this.props.phoneNumber);
        }}
        onFormFilled={this.props.savePhoneAction}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    isPhoneVerified,
    isVerifyingPhone,
    phoneNumber,
    verificationError
  } = state.verification;

  return { isPhoneVerified, isVerifyingPhone, phoneNumber, verificationError };
}

export default connect(mapStateToProps, {
  validatePhoneAction: verificationActions.validatePhone,
  savePhoneAction: verificationActions.savePhoneToState
})(WelcomeContainer);
*/

  static navigationOptions = { header: null };

  componentDidMount() {
    //this would come from the navigation props
    this.props.attendeeListLoad(1);
  }

  render() {
    return (
      <AttendeeList attendeeListData={this.props.attendeeListData}/>
    );
  }
}

function mapStateToProps(state) { 
  const {
    attendeeListId,
    attendeeListData
  } = state.attendees;

  return { attendeeListId, attendeeListData };
}

export default connect(mapStateToProps, {
  attendeeListLoad: attendeeListLoad
})(AttendeeListContainer);