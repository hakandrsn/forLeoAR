import React from 'react'
import {SafeAreaView} from 'react-native'
import FlatlistCon from '../components/FlatlistCon'
import FlatlistTags from '../components/FlatlistTags'
import Header from '../components/Header'
import { styles } from '../Styles/mainScreenStyles'


const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <FlatlistTags />
            <FlatlistCon />
        </SafeAreaView>
    )
}

export default MainScreen
