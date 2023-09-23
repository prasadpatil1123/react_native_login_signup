import { View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({source,children}) => {
  return (
    <View>
        <ImageBackground source={source} style={{height:'100%'}} />
        <View style={{position:'absolute'}}>
            {children}
        </View>
    </View>
  );
}

export default Background