import React from "react";
import { Alert, Text } from "react-native";
import { connect } from "react-redux";
import { AttendeeList } from "pages";
import { attendeeListLoad } from "../actions/attendees";


class AttendeeListContainer extends React.Component {
  static navigationOptions = { header: null };

  componentDidMount() {
    //this ID would come from the navigation props
    this.props.attendeeListLoad(2);
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

  if(attendeeListData === null)
    return { attendeeListId };
  return { attendeeListId, attendeeListData };
}

export default connect(mapStateToProps, {
  attendeeListLoad: attendeeListLoad
})(AttendeeListContainer);