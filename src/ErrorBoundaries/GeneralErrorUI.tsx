import React, { FunctionComponent } from 'react'
import { View, DevSettings, Button } from 'react-native'
import { Header } from './../components'
import { Styles } from './../styles'
import { FallBackUIProps } from './../types'

export const GeneralErrorUI: FunctionComponent<FallBackUIProps> = ({ title }) => {

    return (
        <View style={Styles.screen} > 
            <Header title={title} />
            <Header title="TRY RESTARTING THE APP LATER" />
            <Button title="Press Here To Reload" onPress={() => DevSettings.reload()} />
        </View>
    )
}