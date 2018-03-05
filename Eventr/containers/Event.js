import React from "react";
import { connect } from "react-redux";
import { EventDisplay, EventEdit } from "pages";
import * as eventActions from "../actions/event";

class EventContainer extends React.Component {
  static navigationOptions = { header: null };

  componentWillMount() {
    const { params } = this.props.navigation.state;
    if (params.id) {
      this.props.getEventAction(params.id);
    }
  }

  render() {
    return this.props.isEditingEvent ? (
      <EventEdit
        {...this.props}
        saveAction={() => {
          this.props.setEditingAction(false);
        }}
      />
    ) : (
      <EventDisplay
        {...this.props}
        editButtonAction={() => {
          this.props.setEditingAction(true);
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  const {
    isLoadingEvent,
    isEditingEvent,
    eventLoadingError,
    eventData
  } = state.event;

  return { isLoadingEvent, isEditingEvent, eventLoadingError, eventData };
}

export default connect(mapStateToProps, {
  getEventAction: eventActions.getEvent,
  setEditingAction: eventActions.setEventEdit
})(EventContainer);
