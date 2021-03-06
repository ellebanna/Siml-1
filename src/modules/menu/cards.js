import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native'
import Style from './Style.js'

class Cards extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        {
          name: 'Special Menu',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
          price: 2.50
        },
        ]
    }
  }

  render() {
    return (
      this.state.data.map((u, i) => {
      return (
        <View style={Style.Container}>
          <Image
            style={Style.Image}
            source={require('assets/test.jpg')}
          />
          <View style={Style.Text}>
            <Text style={Style.Title}>{u.name}</Text>
            <Text style={Style.Price}>USD {u.price}</Text>
            <Text style={Style.Description} numberOfLines={4}>{u.description}</Text>
          </View>
        </View>
      );
    })
    )
  }

}

export default Cards;