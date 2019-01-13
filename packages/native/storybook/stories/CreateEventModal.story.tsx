import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CreateEventModal from '../../src/components/CreateEventModal';
import {AppDecorator} from '../decorators';

class ModalWrapper extends React.Component {
  state = {open: true};
  public handleCancel() {
    this.setState({open: false});
  }
  componentWillUnmount() {
    this.setState({open: true});
  }
  public render() {
    return (
      <CreateEventModal
        visible={this.state.open}
        handleCancel={this.handleCancel.bind(this)}
        handleChange={() => {}}
        handleCreate={() => {}}
      />
    );
  }
}

storiesOf('CreateEventModal', module)
  .addDecorator(AppDecorator)
  .add('default view', () => <ModalWrapper />);
