import React from 'react'; // eslint-disable-line no-unused-vars
import DatePicker from 'react-native-datepicker';
import {DateTime} from 'luxon';
import {Text, View} from 'react-native';
const DATEPICKER_FORMAT = 'EEEE, MMM d, yyyy h:mm a';

interface Props {
  label: string;
  onFormChange(isoDate: string);
  date?: string;
}

export default (props: Props) => {
  const {label, onFormChange, date} = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <DatePicker
        date={date ? DateTime.fromISO(date).toJSDate() : DateTime.local().toJSDate()}
        mode="datetime"
        showIcon={false}
        style={{width: '100%'}}
        customStyles={{...styles}}
        getDateStr={d => DateTime.fromJSDate(d).toFormat('cccc, LLL d, yyyy h:mm a')}
        onDateChange={date => {
          const isoDate = DateTime.fromFormat(date, DATEPICKER_FORMAT)
            .toUTC()
            .toISO();

          onFormChange(isoDate);
        }}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
      />
    </View>
  );
};

const styles = {
  wrapper: {
    padding: 8,
    paddingLeft: 16,
    borderColor: '#F79D19',
    borderBottomWidth: 2,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.4)'
  },
  label: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12
  },
  dateInput: {borderWidth: 0, flex: 0},
  dateText: {
    color: 'white',
    fontSize: 16
  },
  dateIcon: {flex: 0},
  //   dateTouchBody: {
  //     flexDirection: 'row-reverse',
  //     justifyContent: 'space-between',
  //     width: '100%'
  //   },
  dateTouch: {},
  btnTextConfirm: {
    height: 20
  },
  btnTextCancel: {
    height: 20
  }
};
