import React from 'react'
import {SafeAreaView} from 'react-native'
import MainScreen from './Screens/MainScreen'
import { styles } from './Styles/mainScreenStyles'


const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <MainScreen />
        </SafeAreaView>
    )
}

export default App
