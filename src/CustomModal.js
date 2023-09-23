import { StyleSheet, Modal, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';


const CustomModal = ({ visible, onClose, navigation }) => {
    return (
        <Modal
            transparent={true}
            animationType='slide'
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.menuContainer}>
                <Text
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('HomeScreen')}>
                    Home
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate('Profile')}>
                    Profile
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate('BMI')}>
                    BMI Calculator
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate('About')}>
                    About Us
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate('Share')}>
                    Share
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() =>
                        alert('Reset password')}>
                    Reset password
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate('Settings')}>
                    Settings
                </Text>
                <Text
                    style={styles.menuItem}
                    onPress={() => {
                        alert("You are logged out!");
                        props.navigation.navigate('Home')
                    }}>
                    Logout
                </Text>

                <TouchableOpacity
                   
                    onPress={onClose}>
                    <Text>
                        <EntypoIcon name="menu" size={25} color="black" />
                    </Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 55,
    paddingVertical: 50,
    backgroundColor:'white',
    },
    menuItem:{
        fontSize: 25,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    
})