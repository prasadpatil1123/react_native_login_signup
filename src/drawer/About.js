import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Background from '../Background'
import Btn from '../Btn'
import { green } from '../Constants'
import CustomModal from '../CustomModal'

const About = (props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  return (
    <Background source={require("../assets/koolshooters.jpg")} style={{ height: '100%' }}>
      <View style={{ marginHorizontal: 40, marginVertical: 70, }}>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.Headingtext}>About Us</Text>
        <View style={styles.carbody}>
          <Text style={styles.textTitle}>RSL</Text>
          <Text style={styles.cardDes}>welcome to RSL!</Text>
          <Text style={styles.cardDes}>We create high quality products that</Text>
          <Text style={styles.cardDes}>will make your life better</Text>
          <Text style={styles.cardDes}>{' '}</Text>
          <Text style={styles.cardDes}>Technology for smarter Business</Text>
          <Btn bgColor={green} textColor='white' btnLabel="LEARN MORE" Press={() => props.navigation.navigate("HomeScreen")} />

        </View>
      </View>
      </View>
    <CustomModal visible={menuVisible} onClose={toggleMenu} navigation={props.navigation}/>
    </Background>
  )
}

const styles = StyleSheet.create({
  Headingtext: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginVertical: 12,
    marginHorizontal: 16,
    color:'white',
  },
  card: {
    width: '90',
    height: '90',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },
  carbody: {
    // flex: 1,
    // flexGrow: 1,
    paddingHorizontal: 12,
  },
  textTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
  },
  cardDes: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 6,
    marginBottom: 6,
    flexShrink: 1,
  },
  menuContainer: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 55,
    paddingVertical: 50,
    backgroundColor:'white',
  },
  menuItem: {
    fontSize: 25,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
})

export default About