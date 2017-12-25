/**
 * Created by xujiaqi on 2017/12/21.
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

export default class View7 extends Component {


    render() {

        return (
            <View style={{flex: 1, height: Pixel.getPixel(90)}}>
                <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>支付定金</Text>
                <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>支付尾款</Text>
                <Text style={{marginLeft: Pixel.getPixel(15), marginTop: Pixel.getPixel(10)}}>支付总计</Text>
                <Text style={{
                    marginTop: Pixel.getPixel(-60),
                    marginLeft: Pixel.getPixel(295),
                }}>{this.props.number}</Text>
                <Text style={{marginTop: Pixel.getPixel(6), marginLeft: Pixel.getPixel(295),}}>115000</Text>
                <Text style={{marginTop: Pixel.getPixel(5), marginLeft: Pixel.getPixel(295),}}>139000</Text>
            </View>

        );
    }

}
