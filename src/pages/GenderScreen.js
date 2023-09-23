import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native'
import React, { useState } from 'react'
import Background from '../Background';
import { darkGreen } from '../Constants';
import Icon from 'react-native-vector-icons/Fontisto';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const GenderScreen = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }
    return (
        <Background source={require("../assets/genderscr.jpg")} style={{ height: '100%' }}>
            <View style={{ marginHorizontal: 40, marginVertical: 70, }}>
                <TouchableOpacity style={styles.menuButton}
                    onPress={toggleMenu}>
                    <Text>
                        <EntypoIcon name="menu" size={25} color="black" />
                    </Text>
                </TouchableOpacity>

                <Text style={styles.textHeading}>
                    Select your Gender:
                </Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate("HomeScreen")}
                    style={styles.homeScr}>

                    <View style={styles.viewCard}>
                        <Text style={styles.textCard}>
                            <Icon name="male" size={50} color="white" />
                            {' '} Male
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        props.navigation.navigate("HomeScreen")}
                    style={styles.homeScr}>

                    <View style={styles.viewCard}>
                        <Text style={styles.textCard}>
                            <Icon name="female" size={50} color="white" />
                            {' '} Female
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

            <Modal
                transparent={true}
                animationType='slide'
                visible={menuVisible}
                onRequestClose={toggleMenu}
            >
                <View style={styles.menuContainer}>

                    <Text
                        style={styles.menuItem}
                        onPress={() =>
                            props.navigation.navigate('HomeScreen')}>
                        Home
                    </Text>
                    <Text
                        style={styles.menuItem}
                        onPress={() =>
                            props.navigation.navigate('Name')}>
                        Profile
                    </Text>
                    <Text
                        style={styles.menuItem}
                        onPress={() =>
                            props.navigation.navigate('BMI')}>
                        BMI Calculator
                    </Text>
                    <Text
                        style={styles.menuItem}
                        onPress={() =>
                            props.navigation.navigate('About')}>
                        About Us
                    </Text>
                    <Text
                        style={styles.menuItem}
                        onPress={() =>
                            props.navigation.navigate('Share')}>
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
                            props.navigation.navigate('Settings')}>
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
                        style={styles.closeButton}
                        onPress={toggleMenu}>
                        <Text>
                            <EntypoIcon name="menu" size={25} color="black" />
                        </Text>
                    </TouchableOpacity>
                </View>

            </Modal>
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
    textCard: {
        color: 'black',
        fontSize: 38,
        fontWeight: 'bold',
        paddingLeft: 50
    },
    textHeading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 35,
        marginBottom: 25,
        marginTop: 80,
    },
    viewCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeScr: {
        backgroundColor: darkGreen,
        borderRadius: 20,
        alignItems: 'flex-start',
        width: '100%',
        paddingVertical: 25,
        marginBottom: 13,
    },
    menuContainer: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        paddingHorizontal: 55,
        paddingVertical: 100,
    },
    menuItem: {
        fontSize: 25,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    closeButton: {
        position: 'absolute',
        top: 22,
        left: 25,
        zIndex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    closeButtonText: {
        fontSize: 25,
        color: 'black',
    }
})

export default GenderScreen;

