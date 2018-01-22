/**
 * Created by xujiaqi on 2018/1/19.
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
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
export default class yuan extends BaseComponent {
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            isShow:this.props.click
        };
    }
    clicks = (rowData)=>{
        if(this.props.from=='bottom'){
            this.setState({
                isShow:!this.state.isShow
            },()=>{this.props.onClick(this.state.isShow)})
            return;
        }

        this.props.clickyuan();
    }
    componentWillReceiveProps(ss){
        console.log(ss)
        this.setState({
            isShow:ss.click
        })
    }
    changeSelectAll =(allTrue)=>{
        this.setState({
            isShow:allTrue
        })
    }

    render() {
        return (
            <View style={styles.Maxview}>
                <TouchableOpacity
                    onPress={
                    () => {
                        this.clicks();
                    }
                }>
                    {this.state.isShow?(<Image source={require('../image/全选.png')}
                                               resizeMode="center"
                                               style={styles.yuanphoto}/>):(<Image source={require('../image/全选1.png')}
                                                                                   resizeMode="center"
                                                                                   style={styles.yuanphoto}/>)}
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    yuanphoto:{
        height: Pixel.getPixel(24),
        width: Pixel.getPixel(24),
    },

    Maxview: {
        height: Pixel.getPixel(24),
        width: Pixel.getPixel(24),
        borderRadius: 12,

    },
});

