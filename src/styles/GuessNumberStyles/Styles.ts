import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 26,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    screen: {
        flex: 1
    },
    generalScreen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    warningText: {
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: 15,
        color: 'red',
        fontSize: 10,
    }
})