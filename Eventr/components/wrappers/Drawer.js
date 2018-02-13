import React from "react";
import { StyleSheet, View, Animated, Easing, Alert } from "react-native";
import { LinearGradient } from "expo";
import { colors } from "shared";

export default class Drawer extends React.Component {
  state = {
   marginValue: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps) {
   if(nextProps.open){
     this.slide(1)
   }
   else{
     this.slide(0)
   }
  }

  slide(target) {
   Animated.timing(this.state.marginValue, {
     toValue: target,
     duration: 500,
     easing: Easing.linear
   }).start();
  }

  render() {
   const margin = this.state.marginValue.interpolate({
     inputRange: [0, 1],
     outputRange: ["100%", "0%"]
   });

   return <Animated.View style={{ ...styles.container, marginLeft:margin }}>
       <LinearGradient colors={colors.gradient_drawer} style={styles.gradient} >
        {this.props.children}
       </LinearGradient>
     </Animated.View>;
  }
}

const styles = {
  container: {
    width: "95%",
    height: "95%",
    position: "absolute",
    right: 0,
    bottom: 0,
    zIndex: 10
  },
  gradient: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    overflow: "hidden",
    paddingTop: 25
  }
};
