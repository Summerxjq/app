/**
 * Created by xujiaqi on 2017/12/19.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ListView,
    Image,
    TouchableOpacity,

} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();

export default class View1 extends Component {

    render() {
        return (
            <View style={{marginTop: Pixel.getPixel(91), height: Pixel.getPixel(80)}}>
                <Text style={{color: "red", fontSize: 20, marginLeft: Pixel.getPixel(15)}}>{this.props.title}</Text>
                <Text style={{fontSize: 14, marginTop: Pixel.getPixel(7), marginLeft: Pixel.getPixel(15)}}>请尽快和卖家协商价格，待卖家通知后支付定金</Text>
            </View>

        );
    }

}


