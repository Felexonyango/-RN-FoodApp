import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
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
          // source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("logout");
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
