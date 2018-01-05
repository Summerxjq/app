/**
 * Created by xujiaqi on 2018/1/4.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    Image,
    TextInput,
    TouchableOpacity


} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
export default class FirstPage extends BaseComponent {
    componentWillUnmount() {
    }
    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.state = {
            renderPlaceholderOnly: 'blank',
        }
    }

    render() {

        return (
            <View style={styles.Maxview}>
                <Text>nihao</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    Maxview:{
        height:Pixel.getPixel(610),
        backgroundColor:"yellow"
    },
});

