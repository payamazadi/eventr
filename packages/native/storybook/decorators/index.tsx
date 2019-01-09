import * as React from 'react';
import Page from '../../src/components/Page';
import {Container} from 'native-base';
import {Font, AppLoading} from 'expo';

class AsyncFontLoader extends React.Component {
  public state = {assetsLoaded: false};
  public async componentDidMount() {
    await Font.loadAsync({Roboto: require('native-base/Fonts/Roboto.ttf')});

    this.setState({assetsLoaded: true});
  }
  public render() {
    return this.state.assetsLoaded ? <>{this.props.children}</> : <AppLoading />;
  }
}

export const FontDecorator = storyFn => <AsyncFontLoader>{storyFn()}</AsyncFontLoader>;

export const AppDecorator = storyFn => (
  <AsyncFontLoader>
    <Page hideNavigation>
      <Container style={styles.container}>{storyFn()}</Container>
    </Page>
  </AsyncFontLoader>
);

const styles = {
  container: {
    padding: 20,
    zIndex: 1,
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  gradient: {zIndex: 0, position: 'absolute', top: 0, left: 0, height: '100%', width: '100%'}
};
