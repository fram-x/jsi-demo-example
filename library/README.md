
# react-native-jsi-demo-library

## Getting started

`$ npm install react-native-jsi-demo-library --save`

### Mostly automatic installation

`$ react-native link react-native-jsi-demo-library`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-jsi-demo-library` and add `RNJsiDemoLibrary.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNJsiDemoLibrary.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNJsiDemoLibraryPackage;` to the imports at the top of the file
  - Add `new RNJsiDemoLibraryPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-jsi-demo-library'
  	project(':react-native-jsi-demo-library').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-jsi-demo-library/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-jsi-demo-library')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNJsiDemoLibrary.sln` in `node_modules/react-native-jsi-demo-library/windows/RNJsiDemoLibrary.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Jsi.Demo.Library.RNJsiDemoLibrary;` to the usings at the top of the file
  - Add `new RNJsiDemoLibraryPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNJsiDemoLibrary from 'react-native-jsi-demo-library';

// TODO: What to do with the module?
RNJsiDemoLibrary;
```
  