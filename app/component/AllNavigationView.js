/**
 * Created by zhengnan on 17/2/14.
 */

import React, {Component, PureComponent} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import *as fontAndColor from '../constant/fontAndColor';
import PixelUtil from '../utils/PixelUtil';
const Pixel = new PixelUtil();
export default class CarInfoNavigationView extends PureComponent {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            navigationBackgroundColor:null,
        };
    }
    setNavigationBackgroindColor=(color)=>{
        this.setState({
            navigationBackgroundColor:color,
        });
    }
    render() {
        const {title, backIconClick, renderRihtFootView,wrapStyle} = this.props;
        return (
            <View style={[styles.navigation,wrapStyle,this.state.navigationBackgroundColor && {backgroundColor:this.state.navigationBackgroundColor}]}>
                <View style={styles.content}>
                    <TouchableOpacity style={{width: Pixel.getPixel(80), height: Pixel.getPixel(44),justifyContent:'center'}}
                                      onPress={backIconClick}>
                        {backIconClick && <Image style={styles.backIcon} source={require('../../images/mainImage/navigatorBack.png')}/>}
                    </TouchableOpacity>
                    <Text allowFontScaling={false}  style={styles.titleText}>{title}</Text>
                    <View style={styles.imageFoot}>
                        {
                            renderRihtFootView && renderRihtFootView()
                        }
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        marginTop: Pixel.getTitlePixel(18),
        height: Pixel.getPixel(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backIcon: {
        marginLeft: Pixel.getPixel(0),
        height: Pixel.getPixel(20),
        width: Pixel.getPixel(20),
    },
    titleText: {
        color: 'white',
        fontSize: 20,

        backgroundColor: 'transparent',
    },
    imageFoot: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',

        width: Pixel.getPixel(80),
        marginRight:Pixel.getPixel(0),
    },
    navigation: {
        marginTop: Pixel.getTitlePixel(20),
        height: Pixel.getTitlePixel(45),
        backgroundColor:'red',
        left:0,
        right:0,
        position: 'absolute',


    }
})