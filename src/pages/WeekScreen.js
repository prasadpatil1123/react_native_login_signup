import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BtnMenu from '../BtnMenu'
import Background from '../Background'

const WeekScreen = (props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const selectedDay = 'Sunday';
  return (
    <Background source={require("../assets/koolshooters.jpg")} style={{height:'100%'}}>
    <ScrollView 
    horizontal={true} style={styles.container}
    >
  <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
    <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
      <Text style={styles.menuButtonText}>III</Text>
    </TouchableOpacity>
    <Text style={{  color: 'white', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10 }}>
      Week Screen</Text>
    
      <ScrollView horizontal={true} style={styles.container}>

<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
        <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40, margin:20, height:500 }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Sunday
            </Text>
        </View>
           </TouchableOpacity>


<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
              <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40,margin:20, height:500  }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Monday
            </Text>
        </View>
           </TouchableOpacity>


<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
       <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40,margin:20, height:500  }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Tuesday
            </Text>
        </View>
           </TouchableOpacity>


<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
               <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40, margin:20, height:500 }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Wednesday
            </Text>
        </View>
 </TouchableOpacity>

<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
               <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40,margin:20, height:500  }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Thursday
            </Text>
        </View>
 </TouchableOpacity>

<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
       <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40, margin:20, height:500 }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Friday
            </Text>
        </View>
 </TouchableOpacity>

<TouchableOpacity
          onPress={() =>
            props.navigation.navigate("ExerciseScreen")}
          >
               <View style={{flex:1,alignItems:'flex-start', justifyContent:'center', backgroundColor: 'yellow', borderRadius:40, margin:20, height:500 }}>
            <Text style={{ color: 'green', fontSize: 50,fontWeight:'bold', margin: 25 , padding:10}}>
                Saturday
            </Text>
        </View>
 </TouchableOpacity>
      </ScrollView>

</View>
</ScrollView>
</Background>
  )
}

export default WeekScreen

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
    backgroundColor: 'green',
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
    marginVertical: 30,
    marginHorizontal: 30
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1
    }
  },
  container:{
    padding:10,


  }

})