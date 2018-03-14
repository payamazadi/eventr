import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "shared";
import { TextCaptionRegular, TextRegular } from "text";

export default function LabeledContent({ label, children }) {
  return (
    <View style={styles.labeledArea}>
      <View style={styles.labeledArea_label}>
        <TextCaptionRegular>{label}</TextCaptionRegular>
      </View>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  labeledArea: {
    paddingTop: 12,
    paddingBottom: 12
  },
  labeledArea_label: {
    paddingBottom: 4
  }
});
