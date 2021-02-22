import React from 'react'
import { Text, View } from 'react-native'

export const FlexBoxComponent = () => {
    return (
        <View style={{ flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center',  padding: 50, flexDirection: 'row', width: '100%', height: 300 }}>
            <View style={{
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                margin: '6px'
            }}>
                <Text>1</Text>
            </View>
            <View style={{
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                margin: '6px'

            }}>
                <Text>1</Text>
            </View>
            <View style={{
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                margin: '6px'

            }}>
                <Text>1</Text>
            </View>
        </View>
    )
}