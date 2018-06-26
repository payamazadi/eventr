import React from "react";
import { AttendeeList } from "pages";

class AttendeeListContainer extends React.Component {
  static navigationOptions = { header: null };

  componentDidMount() {
    //this ID would come from the navigation props
    this.props.attendeeListLoad(2);
  }

  render() {
    return (
      <AttendeeList
        {...this.props}
        attendeeListData={this.props.attendeeListData}
      />
    );
  }
}
