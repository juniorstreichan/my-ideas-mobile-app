import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Home from './screens/Home';
import List from './screens/List';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    List,
  }),
);

export default Routes;
