import React from 'react'; // eslint-disable-line no-unused-vars
import DatePicker from 'react-native-datepicker';
import {DateTime} from 'luxon';

import {TextCaptionRegular} from '../text/';

import {colors} from '../../shared/';

const DATEPICKER_FORMAT = 'MM-dd-yyyy hh:mm';

export default props => {
  const {label, onFormChange, date} = props;

  return (
    <DatePicker
      date={
        date
          ? DateTime.fromISO(date).toFormat(DATEPICKER_FORMAT)
          : DateTime.local().toFormat(DATEPICKER_FORMAT)
      }
      mode="datetime"
      iconComponent={<TextCaptionRegular>{label}</TextCaptionRegular>}
      style={{width: '100%'}}
      customStyles={{
        ...styles
      }}
      format={'MM/DD/YYYY h:mm a'}
      onDateChange={date => {
        const isoDate = DateTime.fromFormat(date, DATEPICKER_FORMAT)
          .toUTC()
          .toISO();
        console.log(isoDate);
        onFormChange(isoDate);
      }}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
    />
  );
};

const styles = {
  dateInput: {borderWidth: 0, flex: 0},
  dateText: {
    color: colors.white,
    fontSize: 16
  },
  dateIcon: {flex: 0},
  dateTouchBody: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%'
  },
  dateTouch: {},
  btnTextConfirm: {
    height: 20
  },
  btnTextCancel: {
    height: 20
  }
};
