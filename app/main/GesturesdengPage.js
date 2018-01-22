/**
 * Created by xujiaqi on 2018/1/20.
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
import HomePage from './HomePage'
var PasswordGesture = require('react-native-gesture-password');
var Password1 = '';

export default class Gestures extends BaseComponent {
    componentWillUnmount() {
    }

    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.state = {
            renderPlaceholderOnly: 'blank',
            message: '请校验手势密码'
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

    onStart = (password) => {}
    onEnd = (password) => {
        /*if (Password1 === '') {
            // The first password
            Password1 = password;
            this.setState({
                status: 'normal',
                message: 'Please input your password secondly.'
            });
        } else {*/
            // The second password
            /*if (password === Password1) {*/
                /*this.setState({
                    status: 'right',
                    message: 'Your password is set to ' + password
                });*/
                let formData = new FormData();
                 formData.append('account',this.props.num,);
                 formData.append('gesturesPassword',password,);
                 fetch('http://10.2.1.92:8080/checkGestures', {
                 method: 'POST',
                 headers: {
                 'Content-Type': 'application/x-www-form-urlencoded'
                 },
                 body: formData,
                 }).then((response) => response.json())
                 .then((responseData) => {
                 console.log('FirstPageOne',responseData)
                     if (responseData.rspCode == '000005') {
                         console.log(responseData)
                         this.setState({
                             status: 'wrong',
                             message: '请重新校验密码'
                         });

                     }else{
                         this.toNextPage({
                             name: 'HomePage',
                             component: HomePage,
                         });
                     }
                 }).catch(
                 (error)=> {
                 });
                /*Password1 = '';*/
                /*this.toNextPage({
                    name: 'HomePage',
                    component: HomePage,
                    params: {}
                })*/
           /* } else {
                this.setState({
                    status: 'wrong',
                    message: '密码不正确重新输入'
                });
            }*/
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
                    <View style={styles.yonghuview}><Text style={styles.yonghutext}>{this.props.num}</Text></View>
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

