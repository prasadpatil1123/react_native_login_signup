import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const BtnMenu = ({ bgColor, btnLabel, textColor, Press }) => {
    return (
        <TouchableOpacity
            onPress={Press}
            style={{
                backgroundColor: bgColor,
                borderRadius: 20,
                borderColor: 'black',
                borderWidth: 0.1,
                alignItems: 'flex-start',
                width: '105%',
                paddingVertical: 100,
                marginVertical: 13,
                flex:1,
                alignItems:'center',
                justifyContent:'center'
            }}
        >
            <Text style={{
                color: textColor,
                fontSize: 25,
                fontWeight: 'bold',
            }}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    )
}

export default BtnMenu