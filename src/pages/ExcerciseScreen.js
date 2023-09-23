import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Background from '../Background';

const ExcerciseScreen = (props) => {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View>
      <Background>
        <View style={{ marginHorizontal: 40, marginVertical: 70 }}>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuButtonText}>III</Text>
          </TouchableOpacity>
          <Text style={{ color: 'purple', fontSize: 40, marginBottom: 25 }}>
              Exercise Screen
            </Text>
        </View>
      </Background>
    </View>
  )
}

export default ExcerciseScreen
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
})