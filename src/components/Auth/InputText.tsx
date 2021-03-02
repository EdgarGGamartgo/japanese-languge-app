import React from 'react'
import { Text, TextInput } from 'react-native'
import { AuthInputTextProps } from './../../types'
import { AuthStyles } from './../../styles'

export const InputText = ({ passwordType, text, textHandler, textValue, placeHolder }: AuthInputTextProps) => {
    return (
        <>
            <Text>{text}</Text>
            <TextInput
                secureTextEntry={passwordType}
                placeholder={placeHolder}
                style={AuthStyles.inputText}
                onChangeText={textHandler}
                value={textValue}
            />
        </>
    )
}