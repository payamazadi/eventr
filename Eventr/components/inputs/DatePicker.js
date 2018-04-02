import React from "react"; // eslint-disable-line no-unused-vars
import DatePicker from "react-native-datepicker";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { View, Text } from "react-native";

import { colors } from "shared";

export default props => {
  const { mode, label } = props;
  return (
    <View>
      {label ? (
        <View style={styles.labelWrapper}>
          <Text style={styles.label}>{label}</Text>
        </View>
      ) : null}
      <DatePicker
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={styles}
        mode={mode}
        iconComponent={icon(mode)}
      />
    </View>
  );
};

const icon = mode =>
  mode === "date" ? (
    <View style={styles.dateIcon}>
      <Text style={styles.iconText}>
        <FontAwesome>{Icons.calendar}</FontAwesome>
      </Text>
    </View>
  ) : (
    <View style={styles.dateIcon}>
      <Text style={styles.iconText}>
        <FontAwesome>{Icons.clockO}</FontAwesome>
      </Text>
    </View>
  );

const styles = {
  dateIcon: {
    margin: 4,
    position: "absolute",
    left: 0,
    top: 2
  },
  iconText: {
    fontSize: 25,
    color: colors.white
  },
  dateInput: {
    marginLeft: 36,
    backgroundColor: colors.white,
    borderRadius: 4
  },
  label: {
    color: colors.white,
    backgroundColor: colors.transparent
  },
  labelWrapper: {
    marginLeft: 36,
    marginBottom: 4
  }
};
