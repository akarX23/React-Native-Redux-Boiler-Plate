//Native Imports
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

// Redux Imports
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Custom components

class DemoClass extends Component {
  render() {
    return (
      <View>
        <Text>Demo Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    prop: state.demo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({}, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoClass);
