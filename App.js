import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Import Screens here
import DemoScreen from "./src/screens/DemoScreen";

const navigator = createStackNavigator(
  {
    Demo: DemoScreen,
  },
  {
    initialRouteName: "Demo",
    defaultNavigationOptions: {
      title: "Demo App",
    },
  }
);

export default createAppContainer(navigator);
