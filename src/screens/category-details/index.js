import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    Button
} from 'react-native';
const { height, fontScale, width } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Slider from '../../components/slider/index';
import Categories from '../../components/categories/index';
import Product from '../../components/product/index'
import Navbar from '../../../src/components/navbar/index';
function CategoryDetails(props) {

    const { navigation } = props;
    const bestSellers = [
        {
            name: 'Smart Lighning',
            discountPrice: '2 250',
            price: '2 500',
            tag: 'Nouveau',
            discount: '19%',
            img: require('../../../assets/clothes.jpg')
        },
        {
            name: 'vxr',
            discountPrice: '8 100',
            price: '9 000',
            tag: 'Nouveau',
            discount: '7%',
            img: require('../../../assets/kitchen.jpg')
        },
        {
            name: 'Smart Lighning',
            discountPrice: '2 250',
            price: '2 500',
            tag: 'Nouveau',
            discount: '19%',
            img: require('../../../assets/clothes.jpg')
        },
        {
            name: 'vxr',
            discountPrice: '8 100',
            price: '9 000',
            tag: 'Nouveau',
            discount: '7%',
            img: require('../../../assets/kitchen.jpg')
        },
        {
            name: 'Smart Lighning',
            discountPrice: '2 250',
            price: '2 500',
            tag: 'Nouveau',
            discount: '19%',
            img: require('../../../assets/clothes.jpg')
        },
        {
            name: 'vxr',
            discountPrice: '8 100',
            price: '9 000',
            tag: 'Nouveau',
            discount: '7%',
            img: require('../../../assets/kitchen.jpg')
        }
    ]
    useEffect(() => {

    }, []);


    return (
        <SafeAreaView style={styles.container}>
             <Navbar />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View>
                    <View style={styles.backHeader}>
                        <TouchableOpacity style={{ padding: 5 }} onPress={() => navigation.goBack()}><AntDesign name="left" color="#e54c50" size={20} /></TouchableOpacity>
                        <Text style={styles.backHeaderText}>Back</Text>
                    </View>
                    
                    <View style={styles.categoryHeader}>
                        <Text style={styles.categoryHeaderText}>Novelties</Text>
                    </View>
                    <Slider />


                    <View style={styles.card}>

                        <View style={styles.cardBody}>
                            <View style={styles.cardBodyRow}>
                                {
                                    bestSellers.map((item, index) => {
                                        return (
                                            <Product navigation={navigation} product={item} key={index} />
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>
                    <Slider />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#c6c6c6',
        borderStyle: 'solid',
        height: height / 14,
        paddingLeft: 10,
        paddingRight: 10,
    },
    backHeaderText: {
        fontSize: fontScale * 15,
        color: '#e54c50'
    },

    categoryHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        height: height / 16,
    },
    categoryHeaderText: {
        fontSize: fontScale * 15
    },
    card: {
        // backgroundColor: 'red',
        padding: 10
    },
    
    cardBodyRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
        // alignItems: 'center'
    },
});


export default CategoryDetails;
