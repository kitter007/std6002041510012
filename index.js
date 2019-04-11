/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
//import App from './components/App';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './components/Login';
import AboutScreen from './components/About';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen}, //<Reference>:{screen: <component>}
    Profile: {screen: AboutScreen},
  });

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => App);
