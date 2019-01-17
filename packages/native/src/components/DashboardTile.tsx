import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default (props: {
  children: React.ReactChild;
  color: 'gold' | 'green' | 'purple' | 'blue';
  title?: string;
  icon?: string;
  actions?: Record<string, Function>;
}) => (
  <View style={[styles.wrapper, styles[props.color]]}>
    {props.icon && (
      <View>
        <Icon style={[styles.icon, styles[props.color]]} type='FontAwesome' name={props.icon} />
      </View>
    )}
    {props.title && (
      <View style={styles.titleWrapper}>
        <Text style={[styles.title, styles[props.color]]}>{props.title}</Text>
      </View>
    )}
    <View style={styles.body}>{props.children}</View>
    {Object.entries(props.actions).map(([name, action]) => (
      <TouchableOpacity
        key={name}
        style={[styles.button, {backgroundColor: COLORS[props.color]}]}
        onPress={e => {
          action();
        }}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const COLORS = {
  green: '#7BCC9C',
  gold: '#FFCA28',
  purple: '#B999EA',
  blue: '#66C0F0'
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    position: 'relative',
    top: 1,
    marginTop: 4
  },
  buttonText: {
    color: 'white'
  },
  body: {
    padding: 8
  },
  wrapper: {
    borderWidth: 3,
    borderRadius: 3
  },
  title: {fontSize: 13},
  titleWrapper: {padding: 8, paddingBottom: 0},
  icon: {fontSize: 20, padding: 8, paddingBottom: 0},
  gold: {
    borderColor: COLORS.gold,
    color: COLORS.gold
  },
  green: {
    borderColor: COLORS.green,
    color: COLORS.green
  },
  purple: {
    borderColor: COLORS.purple,
    color: COLORS.purple
  },
  blue: {
    borderColor: COLORS.blue,
    color: COLORS.blue
  }
});
