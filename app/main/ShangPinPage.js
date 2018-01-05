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
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import * as fontAndClolr from '../constant/fontAndColor';
import BaseComponent from '../component/BaseComponent';
import Landing from './LandingPage'
import Registration from './RegistrationPage';
import NavigatorView from '../component/AllNavigationView';
export default class ShangPinPage extends BaseComponent {
    componentWillUnmount() {
    }
    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        data = [{title: '佳洁士美国进口岳感美白牙膏116g*4支 天鹅绒牙刷2支', image: require("../image/牙膏.jpeg"), flag: true}, {
            title: '佳洁士美国进口岳感美白牙膏116g*4支 天鹅绒牙刷2支',
            image: require("../image/牙膏.jpeg"),
            flag: false
        }];
        this.state = {
            navTitle: '首页',
            dataSource: this.ds.cloneWithRows(data),



        };
    }
    renderRow = (rowData, sectionId, rowId) => {
        console.log('-------flag', rowData.flag);
        return (
            <View style={[styles.everyview,]}>
                    <Image source={rowData.image}
                           resizeMode="stretch"
                           style={styles.imageviews}/>
                    <Text style={styles.etext}>{rowData.title}</Text>
            </View>
        )

    }
    render() {
        return (
            <View style={styles.Maxview}>
                <ListView contentContainerStyle={styles.container}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderRow}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    etext:{
        marginLeft:Pixel.getPixel(150),
        marginTop:Pixel.getPixel(-75),
    },
    imageviews:{
        marginTop:Pixel.getPixel(10),
        marginLeft:Pixel.getPixel(10),
        height:Pixel.getPixel(90),
        width:Pixel.getPixel(130),
    },
    Maxview:{
        flex:1,
    },
    everyview:{
        height:Pixel.getPixel(110),
        borderBottomColor:'aliceblue',
        borderBottomWidth:1
    }
});
