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
var PasswordGesture = require('react-native-gesture-password');
var Password1 = '';

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
            message: '请设置手势密码'
        }
    }

    initFinish = () => {
        this.setState({renderPlaceholderOnly: 'success'});
    };

    _renderPlaceholderView() {
        return (
            <View style={{width: width, height: height, backgroundColor: fontAndClolr.COLORA3}}>
                {this.loadView()}
            </View>
        );
    }

    onStart = (password) => {
        if (Password1 === '') {
            this.setState({
                message: '请输入手势密码'
            });
        } else {
            this.setState({
                message: '请再次输入你的密码'
            });
        }

    }
    onEnd = (password) => {
        if (Password1 === '') {
            // The first password
            Password1 = password;
            this.setState({
                status: 'normal',
                message: 'Please input your password secondly.'
            });
        } else {
            // The second password
            if (password === Password1) {
                this.setState({
                    status: 'right',
                    message: 'Your password is set to ' + password
                });

                Password1 = '';
                change = () => {
                    this.toNextPage({
                        name: 'HomePage',
                        component: HomePage,
                        params: {}
                    })
                }

                // your codes to close this view
            } else {
                this.setState({
                    status: 'wrong',
                    message: '密码不正确重新输入'
                });
            }
        }
    }

    render() {
        if (this.state.renderPlaceholderOnly !== 'success') {
            return this._renderPlaceholderView();
        }
        return (
            <View >
                <View style={styles.flex}>
                    <NavigatorView title="手势密码"/>
                </View>
                <View style={styles.Maxview}>

                    <View style={styles.shoushiview}>
                        <PasswordGesture style={styles.shoushiview}
                                         ref='pg'
                                         status={this.state.status}
                                         message={this.state.message}
                                         onStart={() => this.onStart()}
                                         onEnd={(password) => this.onEnd(password)}
                        />
                    </View>
                    <View style={styles.yonghuview}><Text style={styles.yonghutext}>用户名</Text></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    yonghutext:{
        textAlign:'center'
    },
    yonghuview:{
        height: Pixel.getPixel(40),
        marginTop: Pixel.getPixel(80),

    },
    shoushiview: {
        backgroundColor: 'white',

    },
    textview: {
        height: Pixel.getPixel(80),
    },
    shoushitext: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: Pixel.getPixel(20),
    },
    Maxview: {
        marginTop: Pixel.getPixel(65),
        height: Pixel.getPixel(610),
        backgroundColor: 'ghostwhite'
    },
});
