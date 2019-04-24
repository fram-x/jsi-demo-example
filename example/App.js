/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { performAddition } from "react-native-jsi-calculator";

type Props = {};
export default () => {
  const [durationNative, setDurationNative] = useState(0);
  const [durationJsi, setDurationJsi] = useState(0);

  const calcNativeModule = () => {
    setDurationNative(
      performFunction(() => {
        performAddition(100, 100, () => {});
      })
    );
  };

  const calcJsiModule = () => {
    setDurationJsi(
      performFunction(() => {
        global.RNJsiDemoLibrary.performAddition(20, 300);
      })
    );
  };

  const performFunction = func => {
    const startTime = Date.now();
    for (let i = 0; i < 10000; i++) {
      func();
    }
    return Date.now() - startTime;
  };

  return (
    <View style={styles.container}>
      <Button title="Calc with Native Module" onPress={calcNativeModule} />
      <Button title="Calc with Jsi Module" onPress={calcJsiModule} />
      <Text>{durationNative}</Text>
      <Text>{durationJsi}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
