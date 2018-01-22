/**
 * Created by xujiaqi on 2018/1/8.
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
export default class ShangPinPage2 extends BaseComponent {
    componentWillUnmount() {
    }
    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.BaoBei),
        };
        console.log('------'+this.state.dataSource)
    }
    componentWillReceiveProps(nextProps) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(nextProps.BaoBei),
        });

    }
    renderRow = (rowData, sectionId, rowId) => {

        return (
            <View style={[styles.everyview,]}>
                <Image source={{url:rowData.goodsPicUrl}}
                       resizeMode="stretch"
                       style={styles.imageviews}/>
                <Text style={styles.etext}>{rowData.goodsName}</Text>
                <Text style={styles.text}>¥</Text>
                <Text style={styles.text1}>{rowData.goodsPrices}</Text>
                <View style={styles.fenqiview}>
                    <Text style={styles.fenqitext}>分期免息</Text>
                </View>
            </View>
        )

    }
    render() {
        console.log(this.props.BaoBei)
            return (
                <View style={styles.Maxview}>
                    <ListView contentContainerStyle={styles.container}
                              dataSource={this.state.dataSource}
                              renderRow={this.renderRow}
                              enableEmptySections={true}
                    />
                </View>
            );
        }
    }
const styles = StyleSheet.create({
    fenqitext:{
        color:'red',
        textAlign:'center',
        marginTop:Pixel.getPixel(2),

    },
    fenqiview:{
        height:Pixel.getPixel(20),
        width:Pixel.getPixel(60),
        borderRadius:5,
        overflow:'hidden',
        borderColor:'red',
        borderWidth:1,
        marginLeft:Pixel.getPixel(100),
        marginTop:Pixel.getPixel(-20),
    },
    container:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    text:{
        width:Pixel.getPixel(20),
        fontSize:18,
        color:'red',
        marginLeft:Pixel.getPixel(10),
        marginTop:Pixel.getPixel(7),
    },
    text1:{
        width:Pixel.getPixel(70),
        color:'red',
        fontSize:18,
        marginLeft:Pixel.getPixel(25),
        marginTop:Pixel.getPixel(-21),
    },
    etext:{


    },
    imageviews:{
        marginTop:Pixel.getPixel(10),
        marginLeft:Pixel.getPixel(10),
        height:Pixel.getPixel(120),
        width:Pixel.getPixel(160),
    },
    Maxview:{
        flex:1,
        marginLeft:Pixel.getPixel(7),

    },
    everyview:{
        width:Pixel.getPixel(180),
        height:Pixel.getPixel(200),
        borderColor:'aliceblue',
        borderWidth:1,
    }
});
