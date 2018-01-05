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
var Swiper = require('react-native-swiper');

export default class FirstPageOne extends BaseComponent {
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
                <View style={styles.lunboview}>
                    <Swiper height={Pixel.getPixel(200)}
                            width={Pixel.getPixel(375)}
                            autoplay={true}
                    >
                        <Image source={require('../image/banner1.jpg')}
                        style={styles.photoviews}/>
                        <Image source={require('../image/banner2.jpg')}
                        style={styles.photoviews}
                        />
                        <Image source={require('../image/banner3.jpg')}
                               style={styles.photoviews}/>
                        <Image source={require('../image/banner4.jpeg')}
                               style={styles.photoviews}
                        />
                    </Swiper>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    photoviews:{
        height: Pixel.getPixel(200),
        width: Pixel.getPixel(375),
        resizeMode:"stretch"
    },
    lunboview: {
        height: Pixel.getPixel(200),
        backgroundColor: "yellow",


    },
    Maxview: {
        height: Pixel.getPixel(610),

    },
});
