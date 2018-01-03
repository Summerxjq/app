/**
 * Created by xujiaqi on 2018/1/3.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    TabBarIOS,
    ScrollView

} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';

export default class LandingPage extends BaseComponent {

    render() {
        return (
            <View><App/></View>
        )
    }


}
var App = React.createClass({
    getInitialState: function () {
        return {
            tab: 'Home'

        };
    },
    select: function (tabName) {
        this.setState({
            tab: tabName
        });
    },
    render: function () {
        return (
        <View style={styles.Maxview}>
            <TabBarIOS tintColor="red">
                <TabBarIOS.Item style={styles.tabview}
                                title="首页"

                                onPress={this.select.bind(this, 'Home')}
                                selected={this.select.tab === 'Home'}>

                </TabBarIOS.Item>

            </TabBarIOS>
        </View>

        )
    }
});
var styles = StyleSheet.create({
    Maxview:{
        marginTop:Pixel.getPixel(450),
    },
    tabview: {
        width: Pixel.getPixel(50),
        height: Pixel.getPixel(50),
    },
    flex: {
        flex: 1,

        marginTop: Pixel.getPixel(630),
    },

})