import { NativeModules } from "react-native";

const { RNJsiDemoLibrary } = NativeModules;

export function performAddition(a, b, callback) {
  return RNJsiDemoLibrary.performAddition(a, b, callback);
}
