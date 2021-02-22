import { StyleSheet } from 'react-native';

export const GoalSettingStyles = StyleSheet.create({
    screen: {
      padding: 50,
    }
})

export const GoalItemStyles = StyleSheet.create({
  listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        boderWidth: 10,
        marginVertical: 10,
    }
})

export const GoalInputStyles = StyleSheet.create({
    inputContainer: { 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
    input: { 
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      }
})