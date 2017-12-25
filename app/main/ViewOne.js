/**
 * Created by xujiaqi on 2017/12/21.
 */
import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ListView,
    Image,
    TouchableOpacity,
    RefreshControl,
    TextInput

} from 'react-native';
const {width, height} = Dimensions.get('window');
import  PixelUtil from '../utils/PixelUtil'
let Pixel = new PixelUtil();
import NavigatorView from '../component/AllNavigationView';
import BaseComponent from '../component/BaseComponent';
import MainPage from './MainPage';
export default class ViewOne extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            num: ''
        }
    }

    render() {
        return (
            <View>
                <NavigatorView title='支付定金'/>
                <View style={styles.ViewText}>
                    <TextInput
                        style={styles.TextInputs}
                        placeholder="请输入金额"
                        onChangeText={(text) => this.setState({num: text})}
                    />
                    <TouchableOpacity style={styles.button}
                                      onPress={() => {
                                          this.props.changeNum(this.state.num);
                                          this.backPage()
                                      }}>

                        <Text style={styles.buttonText}>确定</Text>
                    </TouchableOpacity>

                </View>

            </View>
        )

    }


}
const styles = StyleSheet.create({
    buttonText: {
        textAlign: "center",
        color: "white"


    },
    button: {
        width: Pixel.getPixel(80),
        height: Pixel.getPixel(40),
        borderRadius: 20,
        backgroundColor: "#05c5c2",
        justifyContent: "center",
        overflow: "hidden",
        marginTop: Pixel.getPixel(20),
        marginLeft: Pixel.getPixel(150)
    },
    ViewText: {
        height: Pixel.getPixel(40),
        backgroundColor: "darkgrey",
        marginTop: Pixel.getPixel(80)
    },
    TextInputs: {
        height: Pixel.getPixel(40),

    }


});


