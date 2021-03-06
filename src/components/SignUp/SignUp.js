import React, { Component } from 'react';
import { 
    Alert, 
    AppRegistry, 
    Button, 
    StyleSheet, 
    View, 
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import ImageButton from '../ImageButton';
import * as firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export default class SignUp extends Component {
    _onPressButton() {
         Alert.alert('You tapped the button!')
       }

    signupGoogle(){
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    render() {
        return (
        <View style={styles.container} >
            <TouchableOpacity 
            style={styles.closebuttonWrapper}
            onPress={() => Actions.login()} >
                <Image 
                style={[styles.closebuttonWrapper, {top:0, left:0}]}    //inherits the origin from the parent style
                source={require('../../images/signup/close_accent.png')}/>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Text style={styles.title}>Let's Get Started!</Text>
                <Text style={styles.text}>How would you like to sign up?</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ImageButton 
                source={require('../../images/signup/facebook.png')}
                text="Sign up with Facebook"
                color='#FFFFFF'
                backgroundColor='rgba(59,88,157,1)'
                />
                <ImageButton 
                source={require('../../images/signup/google.png')}
                text="Sign up with Google"
                color='#FFFFFF'
                backgroundColor='rgba(239,83,0,1)'
                onPress={() => this.signupGoogle()}
                />
                <ImageButton 
                source={require('../../images/signup/email.png')}
                text="Sign up with Email"
                color='#FFFFFF'
                backgroundColor='rgba(24,172,222,1)'
                onPress={() => Actions.name()}
                />
            </View>
        </View>
        );
    }
}



const styles = StyleSheet.create({
  //Slide styles
  slide: {
    flex: 1,                    // Take up all screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
  },
  // Header styles
  header: {
    color: '#FFFFFF',
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 15,
  },
    container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'white',
    },
    buttonContainer: {
      marginBottom: 314,
    },
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 48,
        marginTop: 60,
    },
    logo: {
        width: 173,
        height: 164,

    },
    logotext: {
        width: 114,
        height: 32,
        margin:30,

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

  AppRegistry.registerComponent('Mojo', () => SignUp);