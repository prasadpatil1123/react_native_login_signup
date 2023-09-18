import { View, Text, Touchable, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from './Constants'
import Btn from './Btn'
import Field from './Field';

const Signup = (props) => {
    return (
        <Background>
            <ScrollView>
            <View style={{ alignItems: 'center', width: 460 }}>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 64,
                        fontWeight: 'bold',
                        marginVertical: 20,
                    }}>
                    Register
                </Text>
                <Text
                    style={{
                        color: 'white',
                        fontSize: 19,
                        fontWeight: 'bold',
                        marginBottom: 20,
                    }}>
                    Create a new Account
                </Text>
                <View
                    style={{
                        backgroundColor: 'white',
                        height: 700,
                        width: 460,
                        borderTopLeftRadius: 110,
                        paddingTop: 50,
                        alignItems: 'center',
                    }}>

                    <Field placeholder="First Name" />
                    <Field placeholder="Last Name" />
                    <Field placeholder="Email / Username"
                        kayboardType={'email-address'}
                    />
                    <Field placeholder="Contact Number"
                        kayboardType={'number'} />
                    <Field placeholder="Password"
                        secureTextEntry={true} />
                    <Field placeholder="Confirm Password"
                        secureTextEntry={true} />

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '78%',
                            paddingRight: 16,
                        }}>
                        <Text style={{ color: 'gray', fontSize: 14 }}>
                            By signing in , you agree to our{' '}
                        </Text>
                        <Text style={{color: darkGreen,fontWeight:'bold',fontSize:14}}>
                        Terms and Conditions
                        </Text>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: "center",
                            width: '78%',
                            paddingRight: 16,
                            marginBottom: 10,
                        }}>
                        <Text style={{ color: 'gray', fontSize: 16 }}>
                            and {" "}
                        </Text>
                        <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                            Privacy Policy
                        </Text>
                    </View>

                    <Btn
                        textColor='white'
                        bgColor={darkGreen}
                        btnLabel="Signup"
                        Press={() =>
                            alert("Account created"
                            )}
                    />
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                        }}>
                            Already have an account ? {' '}
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
        </Background>
    );
};

export default Signup