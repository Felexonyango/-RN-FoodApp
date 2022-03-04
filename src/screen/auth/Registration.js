import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View,Switch } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firebase,{auth,signUp} from '../../firebase/config';
import styles from './style';


export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPass, setshowpass] = useState(true);

    const toggleSwitch=()=> {
        setshowpass(false)
       
       }
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
    }
    const handleSignUp = async () => {
      

        try {
            if (password !== confirmPassword) {
                alert("Passwords don't match.")
                return
            }
            await signUp(email, password);
        } catch (error) {
            alert(error.message);
        }
        // console.log(auth.currentUser.uid)
     

        firebase.firestore().collection('users').doc(auth.currentUser.uid).set({
            name: user.name,
            email: user.email,
            uid: auth.currentUser.uid,
        }).then(() => {
            alert("user created")
        }).catch((err) => {
            alert('err' + err)
        })
    }




    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                <Image
                    style={styles.logo}
                    source={require('../../../assets/food.jpeg')}
                />
                <TextInput
                    style={styles.input}
                    placeholder=' Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
           
                   <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={!showPass}
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCompleteType="password"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"

      
                   />
                  
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry={!showPass}
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                   <Switch
                    onValueChange={toggleSwitch}
                    value={!showPass}
                    /> 
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleSignUp()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </View>
    )
}
