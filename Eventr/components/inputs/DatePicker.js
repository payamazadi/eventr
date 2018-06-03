import React from "react"; // eslint-disable-line no-unused-vars
import DatePicker from "react-native-datepicker";

import { TextCaptionRegular } from "text";

import { colors } from "shared";

export default props => {
  const { label, onFormChange, date } = props;
  return (
    <DatePicker
      date={date}
      mode="datetime"
      iconComponent={<TextCaptionRegular>{label}</TextCaptionRegular>}
      style={{ width: "100%" }}
      customStyles={{
        ...styles
      }}
      onDateChange={date => {
        console.log(date);
        onFormChange(date);
      }}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
    />
  );
};

const styles = {
  dateInput: { borderWidth: 0, flex: 0 },
  dateText: {
    color: colors.white,
    fontSize: 16
  },
  dateIcon: { flex: 0 },
  dateTouchBody: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "100%"
  },
  dateTouch: {},
  btnTextConfirm: {
    height: 20
  },
  btnTextCancel: {
    height: 20
  }
};
