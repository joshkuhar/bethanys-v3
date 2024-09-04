import { View, StyleSheet, Dimensions, Platform, Image, Text } from 'react-native'

const windowDimensions = Dimensions.get('window')
const windowHeight = windowDimensions.height

const Footer = () => {
    return (
        <View style={styles.footer}>
        <View style={styles.footerLeft}>
            <Text style={styles.footerText}>Home</Text>
            <Text style={styles.footerText}>About</Text>
            <Text style={styles.footerText}>Contact</Text>
        </View>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.footerRight}>
            <Text style={styles.footerText}>Privacy</Text>
            <Text style={styles.footerText}>Terms</Text>
            <Text style={styles.footerText}>Cookies</Text>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        backgroundColor: 'black',
        height: windowHeight * 0.1,
    },
    footerLeft: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
    },
    footerRight: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between',
    },
    footerText: {
        color: 'white',
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    ...Platform.select({
        ios: {
            footer: {
                backgroundColor: 'black',
                position: 'absolute',
                top: windowHeight - 50,
            },
        },
        android: {
            footer: {
                backgroundColor: 'blue',
                position: 'absolute',
                top: windowHeight - 50,
            },
        },
        default: {
            footer: {
                backgroundColor: 'green',
                position: 'relative',
                bottom: 0,
            },
        },
    }),
})

export default Footer