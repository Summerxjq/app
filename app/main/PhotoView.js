/**
 * Created by xujiaqi on 2018/1/17.
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
export default class PhotoView extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            Photo: this.props.photo,
        };
        console.log(this.props.photo)
    }

    componentWillReceiveProps(nextProps) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(nextProps.photo),
        });
    }


    render() {
        console.log('1111')
        return (
            <View style={styles.Maxview}>
                    {this.state.Photo.map((value, index) => {
                        if (this.state.Photo.length == 1) {
                            return (<View key={index + 'images1'}style={styles.view1}><Image  source={{uri: value}}
                                                 style={styles.photoview1}/>
                            </View>)
                        }
                        if (this.state.Photo.length == 2) {
                            return (<View key={index + 'images2'} style={styles.view2}><Image source={{uri: value}}
                                                                      style={styles.photoview2}/>
                            </View>)
                        }
                        if (this.state.Photo.length == 3) {
                            return (<View key={index + 'images3'} style={styles.view3}><Image source={{uri: value}}
                                                                      style={styles.photoview3}/>
                            </View>)
                        }
                        if (this.state.Photo.length == 4) {
                            return (<View key={index + 'images4'} style={styles.view4}><Image source={{uri: value}}
                                                                      style={styles.photoview4}/>
                            </View>)
                        }
                        if (this.state.Photo.length == 5) {
                            return (<View key={index + 'images5'} style={styles.view5}><Image source={{uri: value}}
                                                                      style={styles.photoview5}/>
                            </View>)
                        }
                        if (this.state.Photo.length == 6) {
                            return (<View key={index + 'images6'} style={styles.view6}><Image  source={{uri: value}}
                                                                      style={styles.photoview6}/>
                            </View>)
                        }

                    })}
            </View>
        );
    }


}
const styles = StyleSheet.create({
    photoview6: {
        width: Pixel.getPixel(100),
        height: Pixel.getPixel(80),

    },
    photoview5: {
        width: Pixel.getPixel(100),
        height: Pixel.getPixel(80),
    },
    photoview4: {
        width: Pixel.getPixel(150),
        height: Pixel.getPixel(115),
    },
    photoview3: {
        width: Pixel.getPixel(100),
        height: Pixel.getPixel(80),
    },
    photoview2: {
        width: Pixel.getPixel(150),
        height: Pixel.getPixel(120),
    },
    photoview1: {
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(240),
    },
    Maxview: {
        flexDirection:'row',
        flexWrap:'wrap',
        flex:1

    },
    container: {
        marginLeft: Pixel.getPixel(5),
        flexDirection: 'row',
        flexWrap:'wrap'

    },
    view1:{
        width: Pixel.getPixel(300),
        height: Pixel.getPixel(240),
    },
    view2:{
        width: Pixel.getPixel(150),
        height: Pixel.getPixel(120),
    },
    view3:{
        width: Pixel.getPixel(100),
        height: Pixel.getPixel(80),
    },
    view4:{
        width: Pixel.getPixel(150),
        height: Pixel.getPixel(115),
    },
    view5:{
        width: Pixel.getPixel(100),
        height: Pixel.getPixel(80),
    },
    view6:{
        width: Pixel.getPixel(100),
        height: Pixel.getPixel(80),
    },
    imageviews: {
        width: Pixel.getPixel(90),
        height: Pixel.getPixel(70),

    },

});

