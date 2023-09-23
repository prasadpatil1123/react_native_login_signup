import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
    style={{
        backgroundColor: bgColor,
        borderRadius: 50,
        borderColor:'black',
        borderWidth:0.1,
        alignItems:'center',
        width: '75%',
        paddingVertical:5,
        marginVertical: 13,
    }}
    >
        <Text style={{color:textColor, fontSize:25, fontWeight:'bold',}}>
            {btnLabel}
        </Text>
    </TouchableOpacity>
  )
}

export default Btn