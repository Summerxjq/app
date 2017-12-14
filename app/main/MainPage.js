import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';

export default class MainPage extends BaseComponent {

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
            <View style={styles.flex}>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    flex: {
        flex: 1,
        backgroundColor: '#fff'
    },
    img: {

        width: Pixel.getPixel(26),
        height: Pixel.getPixel(26),

    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigimg: {
        width: Pixel.getPixel(56),
        height: Pixel.getPixel(56),
    },
    selectedTitleStyle: {
        color: fontAndClolr.COLORB0
    },
    imageStyle: {
        position: 'absolute',
        bottom: Pixel.getPixel(10),
        left: width / 2.0 - 0.5,
        width: 1,
        height: Pixel.getPixel(30),
        backgroundColor: "lightgray",
    },
    outImageStyle: {
        position: 'absolute',

        bottom: Pixel.getPixel(16),
        left: width / 2 - Pixel.getPixel(56) / 2
    }
});
