import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { Color } from 'common'
import ThemeSettingTile from 'modules/display/ThemeSettingTile.js';
const height = Math.round(Dimensions.get('window').height);

const dummyThemeData = [
  {
    title: 'Increment Mode',
    details: 'Add description here',
    colors: ['#5842D7', '#FFCC00', '#4CCBA6', '#F88BFF'],
  }
];
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTile: 0,
    };
  }

  selectHandler = (index) => {
    let _theme = dummyThemeData[index].colors
    const {setTheme} = this.props;
    setTheme({
      primary: _theme[0],
      secondary: _theme[1],
      tertiary: _theme[2],
      fourth: _theme[3]
    });
    console.log(_theme)
    this.setState({selectedTile: index});
  };

  displayThemeTiles = () => {
    return dummyThemeData.map((data, index) => {
      return (
        <ThemeSettingTile
          id={index}
          key={index}
          selectedTile={index === this.state.selectedTile ? true : false}
          onSelect={this.selectHandler}
          themeTitle={data.title}
          colors={data.details}
          circles={data.colors}
        />
      );
    });
  };
  render() {
    return (
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: Color.containerBackground
          }}
          >
          <View
          style={{
            height: height + 25,
            flex: 1
          }}

          >
            {this.displayThemeTiles()}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({state: state});

const mapDispatchToProps = dispatch => {
  const {actions} = require('@redux');
  return {
    setTheme: (theme) => dispatch(actions.setTheme(theme))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display)