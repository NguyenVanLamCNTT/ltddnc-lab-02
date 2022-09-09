
import React from "react";
import {StyleSheet, View } from "react-native";
import { Text, TextInput, Button } from "@react-native-material/core";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const FormRegister = () => {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber]= React.useState();
    return (
        <View>
            <Text variant="h5" style={styles.title}>Login User</Text>

            <TextInput  
                label="username" 
                style={styles.input}
                leading={props => <Icon name="account" {...props} />}
            />

            <TextInput 
                label="password" 
                style={styles.input} 
                secureTextEntry={true}
                leading={props => <Icon name="eye" {...props} />}
            />

            <Button title="Login" style= {styles.button}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      margin: 16,
      width: 250,
    },
    title: {
        textAlign: "center",
        color: '#6495ED',
        fontWeight: '500',
        marginEnd: 20
    },
    button: {
        color: ''
    }
    
});

export default FormRegister;