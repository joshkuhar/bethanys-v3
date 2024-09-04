import { useEffect } from 'react'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from './Header'
import Footer from './Footer'

const Layout = () => {
    const loaded = true
    
    useEffect(() => {
        if (!loaded) {
        return
        }
    }, [loaded])
    
    return (
        <SafeAreaView>
        <Header />
        <Slot name="content" />
        <Footer />
        </SafeAreaView>
    )
}

export default Layout