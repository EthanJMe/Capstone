import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/Home";
import FeesAndCharges from "../screens/FeesAndCharges";
import AccountTypes from "../screens/AccountTypes";
import Dictionary from "../screens/Dictionary";

const screens ={
Home: {
    screen: Home
},
FeesAndCharges: {
    screen: FeesAndCharges
},
AccountTypes: {
    screen: AccountTypes
},
Dictionary: {
    screen: Dictionary
}
}
const PageStack = createStackNavigator(screens);

export default createAppContainer(PageStack);