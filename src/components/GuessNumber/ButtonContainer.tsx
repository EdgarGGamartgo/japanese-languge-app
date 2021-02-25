import React from 'react'
import { Button } from 'react-native'


interface ButtonProps {
    active: boolean
    style?: {
        color: string
    }[]
}

export const ButtonContainer = ({ active, style } : ButtonProps) => {

    const seeStuff = () => {
        console.log('seeStuff: ', active)
        console.log('seeProps: ', style![0].color)
    }

    return (
            <Button title="EDGAR" onPress={seeStuff} color={style![0].color} />
    )
}
