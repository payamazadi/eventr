import React from 'react';

import CreateEventModal from './CreateEventModal';
import CreateEvent from './mutations/CreateEvent';
interface Props {
  showModal: boolean;
  handleCancel();
}

class CreateEventContainer extends React.Component<Props> {
  public state = {eventName: null};
  public render() {
    return (
      <CreateEvent>
        {({createEvent}) => (
          <CreateEventModal
            handleCreate={() => {
              createEvent({variables: {name: this.state.eventName}});
            }}
            visible={this.props.showModal}
            handleCancel={this.props.handleCancel}
            handleChange={text => {
              this.setState({eventName: text});
            }}
          />
        )}
      </CreateEvent>
    );
  }
}

export default CreateEventContainer;
