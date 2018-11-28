import React from 'react';
import {withNavigation, NavigationInjectedProps} from 'react-navigation';
import {PATHS} from '../../Paths';
import RegistrationComplete from './RegistrationComplete';
import CreateEventModalContainer from '../CreateEventModalContainer';
interface Props {
  navigation: any;
}

class RegistrationCompleteContainer extends React.Component<NavigationInjectedProps> {
  public state = {showModal: false};
  public render() {
    const {navigation} = this.props;
    return (
      <>
        <RegistrationComplete
          handleSubmit={() => {
            this.setState({showModal: true});
          }}
        />
        <CreateEventModalContainer
          showModal={this.state.showModal}
          handleCancel={() => {
            this.setState({showModal: false});
          }}
        />
      </>
    );
  }
}

export default withNavigation(RegistrationCompleteContainer);
