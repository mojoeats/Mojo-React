import React, { Component } from 'react';
import { 
    Alert, 
    AppRegistry,  
    StyleSheet, 
    View, 
    Button,
    Image,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import RoundedButton from '../RoundedButton';
import { Actions } from 'react-native-router-flux';

export default class Name extends Component {

    constructor(props){
        super(props)
    
        this.state = {
          name: "",
        }
    }

    render() {
        return (
            //TODO: replace the TouchableOpacity close for the back button
            //provided by the StackNavigator
        <View style={styles.container} >
            {/* The headers */}
            <View style={styles.logoContainer}>
                <Text style={styles.title}>Let's Get Started!</Text>
                <Text style={styles.text}>What is your full name?</Text>
            </View>
            <View style={styles.buttonContainer}>
                {/* Text Input and Next */}
                <TextInput
                placeholder="Name"
                placeholderTextColor='rgba(155,155,155,1)'
                style={styles.textInput}
                underlineColorAndroid='rgba(0,0,0,0)'
                onChangeText={(text) => this.setState({name: text})}
                />
                <RoundedButton
                text="Next"
                color='#FFFFFF'
                backgroundColor='rgba(24,172,222,1)'
                onPress={() => {
                    //navigate('Email', {name: this.state.name}); 
                    Actions.email({username: this.state.name});
                    console.log(this.state.name);
                    
                    }}
                />
            </View>
            {/* The close button */}
            <TouchableOpacity 
            style={styles.closebuttonWrapper}
            onPress={() => Actions.login()} >
                <Image 
                //inherits the origin from the parent style
                style={[styles.closebuttonWrapper, {top:0, left:0}]}    
                source={require('../../images/signup/close_accent.png')}/>
            </TouchableOpacity>
        </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
    },
    buttonContainer: {
        marginBottom: 436,
    },
    // TextInput container
    textInput: {
      flexDirection: 'row',
      borderRadius: 45,         // Rounded border
      borderWidth: 2,           // 2 point border widht
      //borderColor: 'rgba(24,172,223,1)',   // White colored border
      paddingHorizontal: 45,    // Horizontal padding
      paddingVertical: 8,      // Vertical padding
      alignItems: 'center',
      backgroundColor: 'rgba(242,242,242,1)',
      borderColor: 'rgba(242,242,242,1)',
      fontFamily: 'Avenir',
      fontSize: 16,
      justifyContent: 'center',
      textAlign: 'left',
      width: 286,
      
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 48,
        marginTop: 160,
    },
    title: {
        color: 'rgba(24,172,223,1)',
        textAlign: 'center',
        marginTop: 14,
        marginBottom: 10,
        fontFamily: 'Avenir',
        fontSize: 24,
    },
    text: {
        width: 310,
        color: 'rgba(24,172,223,1)',
        fontFamily: 'Avenir',
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center'
    },
    closebuttonWrapper: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        position: 'absolute',
        top: 34,
        left: 34,
        flex: 1,
        alignItems: 'flex-start',
        width: 24,
        height: 24,
      },
  })

  AppRegistry.registerComponent('Mojo', () => Name);