import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../Screens/Main';
import BookDetails from '../Screens/BookDetails';
import Login from '../Screens/Login';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    },
    BookDetails: {
      screen: BookDetails,
      navigationOptions: {
        headerShown: false,
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      }
    },
  },
  {
    initialRouteName: 'Login',
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
