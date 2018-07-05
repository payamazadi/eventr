import React from 'react';
import {StyleSheet, View} from 'react-native';
import {LinearGradient} from 'expo';

import {TransparentOverlay, Header, FullWidthBorder} from '../wrappers/';
import {TextHeading1} from '../text/';
import {colors} from '../../shared/';
import {BackButton, SubmitButton, TextInput, DatePicker} from '../inputs/';
import {EventValues} from '../../containers/Event';

interface Props {
  loading: boolean;
  backAction(): void;
  eventData: EventValues;
  onFormChange(field: string, value: any): void;
  saveAction(): void;
  formErrors: any;
  isExistingEvent: boolean;
}

export default class EventEdit extends React.Component<Props> {
  static navigationOptions = {header: null};

  render() {
    const {
      loading,
      backAction,
      eventData,
      onFormChange,
      saveAction,
      formErrors,
      isExistingEvent
    } = this.props;

    const {name, description, location, start, end} = eventData ? eventData : {};
    return (
      <LinearGradient colors={colors.gradient} style={styles.gradient}>
        <View style={styles.container}>
          <Header>
            {isExistingEvent && <BackButton onPress={backAction} />}
            <TextHeading1>Event</TextHeading1>
            <View />
          </Header>
          <View style={styles.body}>
            <TextInput
              label={'EVENT NAME'}
              placeholder={'Name your event'}
              value={name}
              onChange={(text: string) => onFormChange('name', text.trim())}
            />

            <TextInput
              label={'DESCRIPTION'}
              placeholder={"What's it about"}
              value={description}
              onChange={(text: string) => onFormChange('description', text.trim())}
            />

            <TextInput
              label={'LOCATION'}
              placeholder={'Event Location'}
              value={location}
              onChange={(text: string) => onFormChange('location', text.trim())}
            />
          </View>
          <FullWidthBorder>
            <DatePicker
              date={start}
              label={'STARTS'}
              onFormChange={(date: string) => onFormChange('start', date)}
            />
          </FullWidthBorder>
          <FullWidthBorder>
            <DatePicker
              date={end}
              label={'ENDS'}
              onFormChange={(date: string) => onFormChange('end', date)}
            />
          </FullWidthBorder>
          <View style={styles.footer}>
            <SubmitButton onPress={saveAction} filled>
              {`${isExistingEvent ? 'Update' : 'Save'} Event`}
            </SubmitButton>
          </View>
        </View>

        <TransparentOverlay show={loading} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: '100%', width: '100%'},
  gradient: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  body: {margin: 16},
  centerText: {
    textAlign: 'center'
  },
  padded: {
    margin: 12
  },
  eventTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 88,
    width: '100%',
    borderTopWidth: 2,
    borderStyle: 'solid',
    borderColor: colors.white,
    marginTop: 16,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 10
  }
});
