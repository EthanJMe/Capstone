import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import Home from "../screens/Home";
import FeesAndCharges from "../screens/FeesAndCharges";
import AccountTypes from "../screens/AccountTypes";
import Dictionary from "../screens/Dictionary";
import Login from "../screens/login";
import Registration from "../screens/registration";

const screens ={
Login: {
    screen: Login
},
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
},
Registration: {
    screen: Registration
},
}
const PageStack = createStackNavigator(screens);

export default createAppContainer(PageStack);