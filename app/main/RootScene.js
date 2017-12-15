import React from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    BackAndroid,
    InteractionManager,
    Text,
    AppState
} from 'react-native';

import BaseComponent from '../component/BaseComponent';
let {height, width} = Dimensions.get('window');
import MainPage from './MainPage';
import  PixelUtil from '../utils/PixelUtil'
var Pixel = new PixelUtil();
const versionCode = 27.0;
let canNext = true;
let Platform = require('Platform');
let deploymentKey = '';
const IS_ANDROID = Platform.OS === 'android';

export default class RootScene extends BaseComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        try {
            BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
        } catch (e) {

        } finally {
            //InteractionManager.runAfterInteractions(() => {
            this.setState({renderPlaceholderOnly: 'loading'});
            this.initFinish();
            //});
        }
    }

    /**
     *   初始化
     **/
    initFinish = () => {
        this.toNextPage(this.navigatorParams);
    };

    toNextPage = (mProps) => {
        const navigator = this.props.navigator;
        if (navigator) {
            navigator.replace({
                ...mProps
            })
        }
    }

    navigatorParams = {
        name: 'MainPage',
        component: MainPage,
        params: {}
    }

    render() {
        return (<View></View>)
    }

    /**
     *   日期格式化
     **/
    dateFormat = (date, fmt) => {
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (let k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}

const styles = StyleSheet.create({
    parentStyle: {
        flex: 1
    },
    childStyle: {
        width: width,
        height: height
    },
});

