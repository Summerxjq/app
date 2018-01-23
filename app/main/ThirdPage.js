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
    TouchableOpacity,
    ListView


} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil';
import Yuan from './yuan';
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
import Commodity from './CommodityPage';
import GouWuShangPin from './GouWuShangPin'
var op = false;
var op1 = false;
export default class FirstPage extends BaseComponent {


    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.state = {
            renderPlaceholderOnly: 'blank',
            isShow: true,
            datashangpin: [],
        }
    }

    initFinish() {
        this.fetchData();
    }

    fetchData = () => {
        fetch('http://10.2.1.92:8080/shoppingCart/get', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:'account='+11111111112
        }).then((response) => response.json())
            .then((responseData) => {
                console.log('购物车', JSON.stringify(responseData.data))
                this.setState({
                    datashangpin: responseData.data,
                    renderPlaceholderOnly: 'success',

                });
            })
    }

    changeCheck = (isShow) => {
        this.refs.GouWuShangPin.changeAll(isShow);
    }

    onChange = (allTrue) =>{
        this.refs.yuan.changeSelectAll(allTrue)
    }
    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            return null;
        } else {
            return (
                <View style={styles.Maxview}>
                    <View >
                        <NavigatorView title="购物车"/>
                    </View>
                    <View style={styles.jiesuan}>
                        <View style={styles.yuan}>
                            <Yuan from="bottom" onClick={(isShow)=>{this.changeCheck(isShow)}} ref="yuan"/>
                        </View>
                        <Text style={styles.quanxuan}>全选</Text>
                        <Text style={styles.heji}>合计:</Text>
                        <Text style={styles.numberview}>￥0</Text>
                        <View style={styles.qujiesuan}>
                            <Text style={styles.qujiesuanview}>去结算</Text>
                        </View>
                        <View style={styles.thing}>
                            <GouWuShangPin shangpin={this.state.datashangpin} ref="GouWuShangPin"  changeSelectAll={(allTrue)=>{this.onChange(allTrue)}}/>
                        </View>

                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    changeyuan: {
        height: Pixel.getPixel(26),
        width: Pixel.getPixel(26),

    },
    duihaoviews: {
        borderRadius: 13,
        overflow: 'hidden',
        height: Pixel.getPixel(26),
        width: Pixel.getPixel(26),
        marginLeft: Pixel.getPixel(-2),
        marginTop: Pixel.getPixel(-2),
        backgroundColor: 'red'
    },

    xieziview: {
        flex: 1,

    },

    thing: {
        height: Pixel.getPixel(485),
        marginTop: Pixel.getPixel(-545),
    },
    qujiesuanview: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        marginTop: Pixel.getPixel(20),

    },
    qujiesuan: {
        height: Pixel.getPixel(60),
        width: Pixel.getPixel(90),
        backgroundColor: 'red',
        marginTop: Pixel.getPixel(-78),
        marginLeft: Pixel.getPixel(285),
    },
    numberview: {
        fontSize: 20,
        color: 'red',
        height: Pixel.getPixel(60),
        width: Pixel.getPixel(150),
        marginTop: Pixel.getPixel(-60),
        marginLeft: Pixel.getPixel(160),
    },
    heji: {
        fontSize: 20,
        height: Pixel.getPixel(60),
        width: Pixel.getPixel(60),
        marginTop: Pixel.getPixel(-44),
        marginLeft: Pixel.getPixel(110),
    },
    quanxuan: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(40),
        marginTop: Pixel.getPixel(-20),
        marginLeft: Pixel.getPixel(50),
    },
    yuan: {
        height: Pixel.getPixel(24),
        width: Pixel.getPixel(24),
        borderRadius: 12,
        marginLeft: Pixel.getPixel(10),
        marginTop: Pixel.getPixel(18),

    },
    yuan1: {
        height: Pixel.getPixel(24),
        width: Pixel.getPixel(24),
        borderRadius: 12,
        marginLeft: Pixel.getPixel(10),
        marginTop: Pixel.getPixel(8),
    },
    jiesuan: {
        height: Pixel.getPixel(60),
        backgroundColor: 'white',
        marginTop: Pixel.getPixel(550),
    },
    Maxview: {
        height: Pixel.getPixel(610),

    },
});

