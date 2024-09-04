import { View, StyleSheet, Image, Text } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons'

const Header = () => {
    return (
        <View style={styles.header}>
        <View style={styles.headerLeft}>
            <AntDesign name="arrowleft" size={24} color="black" />
            <Feather name="menu" size={24} color="black" />
        </View>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.headerRight}>
            <Feather name="search" size={24} color="black" />
            <Feather name="shopping-cart" size={24} color="black" />
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
    },
    headerLeft: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
    },
    headerRight: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
})

export default Header