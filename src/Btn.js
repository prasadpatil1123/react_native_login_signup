import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Btn = ({bgColor, btnLabel, textColor, Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
    style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems:'center',
        width: 350,
        paddingVerticsl:5,
        marginVertical: 10,
    }}
    >
        <Text style={{color:textColor, fontSize:25, fontWeight:'bold'}}>
            {btnLabel}
        </Text>
    </TouchableOpacity>
  )
}

export default Btn