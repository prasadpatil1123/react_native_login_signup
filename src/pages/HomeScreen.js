import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Background from '../Background'
// import BtnMenu from '../BtnMenu';
import { darkGreen } from '../Constants';
import CustomModal from '../CustomModal';


const HomeScreen = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <Background source={require("../assets/homescr.jpg")} style={{ height: '100%' }}>
      <View style={{ marginHorizontal: 40, marginVertical: 50, }}>

        <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
          <Text style={styles.menuButtonText}>III</Text>
        </TouchableOpacity>

        <Text style={styles.textHeading}>
          Home Screen
        </Text>
        <View style={styles.box1}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ModeScreen")}
            style={styles.homeScr}>

            <View style={styles.viewCard}>
              <Text style={styles.textCard}>
                Gym Excercise
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ModeScreen")}
            style={styles.homeScr}>

            <View style={styles.viewCard}>
              <Text style={styles.textCard}>
                Excercise with Dumbells
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("ModeScreen")}
            style={styles.homeScr}>

            <View style={styles.viewCard}>
              <Text style={styles.textCard}>
                Excercise without equipmets
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
      {/* <CustomModal visible={menuVisible} onClose={toggleMenu} navigation={props.navigation} /> */}

    </Background>
  )
}

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: -50,
    left: -17,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  menuButtonText: {
    color: 'green',
    fontSize: 22,
    transform: [{ rotate: '90deg' }],
  },
  textHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 5,
    marginTop: 10,

  },
  homeScr: {
    backgroundColor: darkGreen,
    borderRadius: 20,
    alignItems: 'flex-start',
    width: '100%',
    paddingVertical: 25,
    marginBottom: 13,
  },
  viewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCard: {
    color: 'white',
    fontSize: 38,
    fontWeight: 'bold',
    paddingLeft: 50
  },
  menuContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 55,
    paddingVertical: 50,
    backgroundColor: 'white',
  },
  menuItem: {
    fontSize: 25,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 'auto',
    height: 'auto',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },

})
export default HomeScreen