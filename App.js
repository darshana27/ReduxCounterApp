import React, {Component} from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';
import { connect } from 'react-redux'
import { counterIncrement,counterDecrement, counterClear,counterSet } from './src/actions'
class App extends Component {
  constructor(props){
    super(props);
    this.onChangeText=this.onChangeText.bind(this);
  }

  onChangeText(number){
    const count=parseInt(number);
    this.props.counterSet(count)
  }

  render() {
    console.log(this.props)
    return (
      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
        <TextInput
            style={{height:50,width:100,borderWidth:1}}
            underlineColorAndroid={'transparent'}
            returnKeyType="done"
            onChangeText={this.onChangeText}
            value={this.props.count.toString()}
        />
        <Text>{this.props.count}</Text>
        <Button title='+' onPress={this.props.counterIncrement}></Button>
        <Button title='-' onPress={this.props.counterDecrement}></Button>
        <Button title='Clear' onPress={this.props.counterClear}></Button>
      </View>
    );
  }
}

function mapStateToProps(state){
  return {
    count: state.counter,
    hello:state.hello
  }
}
export default connect(mapStateToProps,{ counterIncrement,counterDecrement,counterClear,counterSet })(App)