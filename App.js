import React, {Component} from 'react';
import { StyleSheet, Text, Image, View, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// import data from './data.js';

//test data
const data = [{text: 'lion balm', uri: './assets/product-1.png'},{text: 'cbd oil', uri: './assets/product-2.png'}, {text: 'cbd oil 2', uri: './assets/product-3.png'}]

const sliderWidth = 400

const itemWidth = 400

export default class App extends Component {

  _renderItem ({item, index}) {
    return (
      <View style={styles.container}>
        <Text>{item.text}</Text>
      </View>
    )
  }

  render() {
    return (
      <Carousel 
        ref={(c) => { this._carousel = c; }}
        data={data}
        renderItem={this._renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
