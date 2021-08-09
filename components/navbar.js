import React from 'react'
import { TextInput, View, Button } from 'react-native'
import { useState } from 'react/cjs/react.development'

export const Navbar = () => {
    const [value, setValue] = useState("")

    return (
        <View>
            <TextInput
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button onPress={() => check()} />
        </View>
    )
}