import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Image,
  ToastAndroid,
} from 'react-native';
import {COLORS, AppName} from './constants/COLORS';
import {pharmacy, medicine} from './constants/images';
import {RFValue} from 'react-native-responsive-fontsize';
const SIZES = Dimensions.get('window');
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      passInput: '',
      email: '',
      confPass: '',
      relWidth: SIZES.width,
    };
  }
  componentDidMount() {
    Dimensions.addEventListener('change', ({window}) => {
      this.setState({
        relWidth: window.width,
      });
    });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change');
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 50,
          backgroundColor: COLORS.white,
        }}>
        <StatusBar backgroundColor={COLORS.primary} />
        <Image
          source={pharmacy}
          style={{
            width: 40,
            height: 40,
          }}
          resizeMode="contain"
        />
        <TextInput
          value={this.state.email}
          onChangeText={text => {
            this.setState({
              email: text,
            });
          }}
          style={{
            height: 40,
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            marginBottom: 20,
            padding: 10,
          }}
          placeholder={'email'}
        />

        <View style={this.state.relWidth > 500 ? {flexDirection: 'row'} : null}>
          <View
            style={this.state.relWidth > 500 ? {flex: 1, marginEnd: 10} : null}>
            <TextInput
              value={this.state.passInput}
              onChangeText={text => {
                this.setState({
                  passInput: text,
                });
              }}
              style={{
                height: RFValue(40),
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                marginBottom: 20,
                padding: 10,
              }}
              placeholder={'pass'}
            />
          </View>
          <View
            style={
              this.state.relWidth > 500 ? {flex: 1, marginStart: 10} : null
            }>
            <TextInput
              value={this.state.confPass}
              onChangeText={text => {
                this.setState({
                  confPass: text,
                });
              }}
              style={{
                height: 40,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 8,
                marginBottom: 20,
                padding: 10,
              }}
              placeholder={'confPass'}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#00b4d8',
            padding: 10,
            height: 40,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontWeight: 'bold',
            }}>
            Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
