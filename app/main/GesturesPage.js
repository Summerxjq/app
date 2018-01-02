/**
 * Created by xujiaqi on 2018/1/2.
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
export default class LandingPage extends BaseComponent {
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
    initFinish = () => {
        this.setState({renderPlaceholderOnly: 'success'});
    };
    _renderPlaceholderView() {
        return (
            <View style={{width: width, height: height,backgroundColor: fontAndClolr.COLORA3}}>
                {this.loadView()}
            </View>
        );
    }
    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            return this._renderPlaceholderView();
        }
        return (
            <View >
                <View style={styles.flex}>
                    <NavigatorView title="第三页"/>

                </View>
                <View style={styles.Maxview}>
                    <View>
                        <TextInput style={styles.inputview1}
                                   placeholder="用户名"
                        />
                    </View>
                    <View>
                        <TextInput style={styles.inputview2}
                                   placeholder="密码"
                        />
                    </View>
                    <View>
                        <TextInput style={styles.inputview3}
                                   placeholder="验证码"
                        />
                    </View>
                    <View style={styles.imageview}>
                        <Image source={require('../image/yzm.png')}/>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            this.toNextPage({
                                name: 'Registration',
                                component: Registration,
                                params: {
                                }
                            });
                        }}>
                            <Text style={styles.zhuceview}>没有账号？去注册></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dengluview}>
                        <Text style={styles.denglutext}>第三页</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageview: {
        marginLeft: Pixel.getPixel(210),
        marginTop: Pixel.getPixel(-40),
    },
    zhuceview: {
        marginLeft: Pixel.getPixel(200),
        marginTop: Pixel.getPixel(40),
        textDecorationLine: 'underline',
        textDecorationColor: 'red',
        fontSize: 15,
        color: 'red'
    },
    denglutext: {
        lineHeight: Pixel.getPixel(40),
        textAlign: 'center',
        color: 'white',
        fontSize: 15
    },
    dengluview: {
        width: Pixel.getPixel(250),
        height: Pixel.getPixel(40),
        backgroundColor: 'red',
        marginTop: Pixel.getPixel(80),
        marginLeft: Pixel.getPixel(60),
    },
    inputview1: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(300),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    inputview2: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(300),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    inputview3: {
        height: Pixel.getPixel(40),
        width: Pixel.getPixel(160),
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 1,
        marginLeft: Pixel.getPixel(37),
        marginTop: Pixel.getPixel(40),
    },
    Maxview: {
        marginTop: Pixel.getPixel(65),
        height: Pixel.getPixel(610),
        backgroundColor: 'ghostwhite'
    },
});
