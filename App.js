import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import ResultsDetail from './src/components/ResultsDetail';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShowScreen,
}, {
  initialRoutName: "Search",
  defaultNavigationOptions: {
    title: "Business Search"
  }
});

export default createAppContainer(navigator)