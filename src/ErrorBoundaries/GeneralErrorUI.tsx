import React, { FunctionComponent } from 'react'
import { View, DevSettings, Button } from 'react-native'
import { Header } from './../components'
import { Styles } from './../styles'
import { FallBackUIProps } from './../types'

export const GeneralErrorUI: FunctionComponent<FallBackUIProps> = ({ title }) => {

    return (
        <View style={Styles.screen} > 
            <Header  title={title} />
            <View style={{ marginLeft: '25%' , marginTop: 20, width: '50%' }}>
                <Button color='blue'  title="Press Here To Reload" onPress={() => DevSettings.reload()} />
            </View>
        </View>
    )
}