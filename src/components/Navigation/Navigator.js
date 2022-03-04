
import 'react-native-gesture-handler';

import {Text,LogBox} from 'react-native'
import React, { useEffect, useState } from 'react'
import  {auth}  from '../../firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer' 
import RegistrationScreen from "../../screen/auth/Registration"
import LoginScreen from "./../../screen/auth/LoginScreen"
import HomeScreen from "../../screen/Home/HomeScreen"
import CategoriesScreen from '../../screen/Categories/CategoriesScreen';
import RecipeScreen from '../../screen/Recipe/RecipeScreen';
import RecipesListScreen from '../../screen/RecipesList/RecipesListScreen';
import DrawerContainer from '../../screen/DrawerContainer/DrawerContainer';
import IngredientScreen from '../../screen/Ingredient/IngredientScreen';
import SearchScreen from '../../screen/Search/SearchScreen'
import IngredientsDetailsScreen from '../../screen/IngredientsDetails/IngredientsDetailsScreen'
import  ProfileScreen from  "../../screen/Profile/profileScreen"
import Logout from "../../screen/Logout/LogoutScreen"
import settingScreen from '../../screen/settings/SettingScreen';

LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);


const StackAuth = createStackNavigator();
const AppStack = createStackNavigator();


export default function App() {
  const [user, setUser] = useState(null)
  const [Loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribeAuth = auth.onAuthStateChanged(async authUser => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    });
    
    return unsubscribeAuth;
  }, []);
 

  if (Loading) {
    return <Text>Loading...</Text>;
  }
  const AppHome = () => {
    return (
      <AppStack.Navigator
  
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center',
          flex: 1,
        }
    }}>
      
        <AppStack.Screen name='Home'component={HomeScreen}/>
      <AppStack.Screen name='Categories' component={CategoriesScreen}/>
      <AppStack.Screen name='Recipe' component={RecipeScreen}/>
      <AppStack.Screen name='RecipesList' component={RecipesListScreen} />
      <AppStack.Screen name='Ingredient' component={IngredientScreen} />
      <AppStack.Screen name='Search' component={SearchScreen} />
      <AppStack.Screen name='IngredientsDetails' component={IngredientsDetailsScreen} />
        <AppStack.Screen name='profile' component={ProfileScreen}/>
        <AppStack.Screen name='setting'component={settingScreen}/>
        <AppStack.Screen name='logout' component={Logout}/>
      </AppStack.Navigator>
    )
  }


  const Auth =()=>{
    return(

      <StackAuth.Navigator>
      <StackAuth.Screen name='Login'component={LoginScreen}/>
      <StackAuth.Screen name='Registration'component={RegistrationScreen}/>
      </StackAuth.Navigator>
  
    )
   

  }
  const Drawer = createDrawerNavigator();
  function DrawerStack() {
    return(
      <Drawer.Navigator
        drawerPosition='left'
        initialRouteName='Main'
        drawerStyle={{
          width: 250
        }}
        screenOptions={{headerShown: false}}
        drawerContent={({navigation})=> <DrawerContainer navigation={navigation}/>}
      >
        <Drawer.Screen name='Main' component={AppHome} />
      </Drawer.Navigator>
    )
  } 
 
  
  return (

<NavigationContainer>

  
 {user?  <DrawerStack/>:<Auth/>}


</NavigationContainer>
  
  )
} 