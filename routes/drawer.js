import { createDrawerNavigator } from 'react-native-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from '../screens/list';
import NumbersStack from '../screens/home';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,        
    },
    Cases: {
        screen: NumbersStack
    }
});

export default createAppContainer(RootDrawerNavigator);