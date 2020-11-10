# React-Native-Redux-Boiler-Plate
### A simple boiler plate with all redux implementations.

## Steps to get started:
- Open terminal and cd into the directory you want the project in.
- Clone the repo by running `git clone https://github.com/akarX23/React-Native-Redux-Boiler-Plate.git`.
- Run `npm install`.
- Go to `app.json` in the root of the project 
```
{
  "name": "ProjectName",
  "displayName": "ProjectName",
  "expo": {
    "name": "ProjectName",
    "slug": "Blog",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ]
  }
}
```
- Chnage `name, displayName, expo.name` to your project name.
- Go to `android/local.properties` and put the path to your android SDK.
- Go to `android/build.gradle` and check the `buildToolsVersion`.
 - Make sure the `buildToolsVersion` is same as the emulator you are about to run. By default it is 29.
 - Start your android emulator. Genymotion is recommended over Android Studio.
 - Go to terminal and run `npm run android` to start your app!
 
 ## The app uses `react-navigation` for navigation. 
 ## You just need to define your actions and reducers and connect your components to redux start. A demo template for actions, reducer and screens have been provided to get you started.
