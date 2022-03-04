import React,{useState} from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";
import { logout } from "../../firebase/config";
import { Entypo } from '@expo/vector-icons';

export default function DrawerContainer({navigation}) {
 //set mode 
 const [darkMode, setDarkmode] = useState(true)

  const signOutUser = () => {
   
        logout()  
}
const styles = StyleSheet.create({ // cria a estilização do APP
  container: {
    backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
  },
 
  darkModeButton: {
    backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
    alignSelf: "flex-start",
    marginLeft: 20,
    padding: 10,
    borderRadius: 30,
  },


});
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Home"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Home");
            navigation.closeDrawer();
          }}
        />
         <MenuButton
          title="Profile"
          // source={require("")}
          onPress={() => {
            navigation.navigate("profile");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Categories"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Categories");
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Search"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Search");
            navigation.closeDrawer();
          }}
        />
          <MenuButton
          title="setting"
          // source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("setting");
            navigation.closeDrawer();
          }}
        />
    
          <MenuButton 
          title="Logout"
          onPress={() =>{
            signOutUser()
            navigation.navigate('Login')
          }}/>


        <TouchableOpacity style={styles.darkModeButton}>
         
          <Entypo 
          name={darkMode ? "light-up" : "moon"} 
          color={darkMode ? "white" : "black"} 
          size={24} 
          onPress={() => darkMode ? setDarkmode(false) : setDarkmode(true)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
