import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import FlatlistCon from './Components/FlatlistCon'
import FlatlistTags from './Components/FlatlistTags'
import Header from './Components/Header'
import {styles} from './GlobalStyles'


const App = () => {
    return (
<SafeAreaView style={styles.container}>
<Header />
<FlatlistTags />
<FlatlistCon/>
</SafeAreaView>
    )
}

export default App
