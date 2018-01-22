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
export default class ClothesLength extends BaseComponent {
    componentWillUnmount() {
    }
    /**
     * 初始化,指定tab及页面被选中
     */
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            renderPlaceholderOnly: 'blank',
            dataSource:ds.cloneWithRows(['中长款','常规款','短款','长款']),
        }
    }
    renderRow = (rowData, sectionId, rowId) => {
        return (
            <View style={styles.sview}>
                <TouchableOpacity onPress={
                    ()=>{
                        this.props.click3(rowData)
                    }
                }>
                <Text style={styles.titleview}>{rowData}</Text>
                </TouchableOpacity>
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
    titleview:{
        textAlign:'center',
        marginTop:Pixel.getPixel(18),

    },
    sview:{
        height:Pixel.getPixel(50),
        borderBottomColor:'darkgray',
        borderBottomWidth:1
    },
    Maxview:{
        height:Pixel.getPixel(200),
        backgroundColor:"white"
    },
});
