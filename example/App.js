/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Button, View } from "react-native";
import { performAddition } from "react-native-jsi-calculator";

type Props = {};
export default class App extends Component<Props> {
  calc = () => {
    performAddition(100, 100, r => console.log(r));
    alert(global.RNJsiDemoLibrary.performAddition(20, 300));
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="Calc" onPress={this.calc} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
