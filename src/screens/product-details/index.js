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
const { height, fontScale } = Dimensions.get('window')
import Slider from '../../components/slider/index';
import Categories from '../../components/categories/index';

function ProductDetails(props) {

    const { navigation } = props;
    useEffect(() => {

    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View>
                    <Slider />

                    <View style={styles.details}>

                        <Text style={styles.productName}>iPhone 12</Text>
                        <Text style={styles.priceLabel}>Price:</Text>
                        <View style={styles.priceRow}>
                            <Text style={styles.discountPrice}>8 820 F CFA</Text>
                            <Text style={styles.price}>9 800 F CFA</Text>
                        </View>

                        <View style={styles.counterRow}>
                            <Text style={styles.quantityText}>
                                Quantity:
                            </Text>

                            <View style={styles.counter}>
                                <TouchableOpacity style={styles.counterBtn}>
                                    <Text style={styles.counterBtnText}>
                                        -
                                     </Text>
                                </TouchableOpacity>

                                <View style={styles.quantityValue}>
                                    <Text style={styles.quantityValueText}>
                                        1
                                     </Text>
                                </View>

                                <TouchableOpacity style={styles.counterBtn}>
                                    <Text style={styles.counterBtnText}>
                                        +
                                     </Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.stockText}>
                                Stock (32)
                            </Text>
                        </View>

                        <Text style={styles.label}>Description:</Text>
                        <Text style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel ante ullamcorper, interdum mauris in, euismod lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula, turpis mollis accumsan facilisis, arcu dui porttitor felis, consequat feugiat felis massa vitae leo. Suspendisse suscipit enim erat, vel tempus odio condimentum sed. Suspendisse potenti. Fusce ullamcorper eget leo quis iaculis. Proin erat purus, consectetur imperdiet efficitur in</Text>

                        <Text style={styles.label}>Similar Products:</Text>
                        <Categories title={false} discountTag={true} />

                        <Button
                            title='Add to Cart'
                            color='#fd5240'
                            onPress={()=> navigation.navigate('cart')}
                        />
                    </View>
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
    details: {
        // backgroundColor: 'grey',
        padding: 10,
        paddingTop: 25,
        marginTop: 6,
        borderWidth: 1,
        borderColor: '#e9e9e9',
        borderStyle: 'solid',
    },
    productName: {
        color: '#7f7f7f',
        fontSize: fontScale * 14,
        fontWeight: 'bold'
    },
    priceLabel: {
        fontWeight: 'bold',
        fontSize: fontScale * 14,
        marginTop: 6

    },
    priceRow: {
        flexDirection: 'row',
    },
    discountPrice: {
        fontSize: fontScale * 15,
        fontWeight: 'bold',
        color: '#068306'
    },
    price: {
        fontSize: fontScale * 15,
        fontWeight: 'bold',
        color: '#fe0405',
        textDecorationLine: 'line-through',
        marginLeft: 20
    },
    counterRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        paddingTop: 12,
        paddingBottom: 12

    },
    quantityText: {
        fontSize: fontScale * 14,
        fontWeight: 'bold'
    },
    stockText: {
        fontWeight: 'bold'
    },
    counter: {
        flexDirection: 'row',

        height: 30,
    },
    counterBtn: {
        backgroundColor: '#d3d3d3',
        width: 50,
        // height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0

    },
    counterBtnText: {
        color: 'white',
        fontSize: fontScale * 15,
        padding: 0,
        // flex: 1, flexWrap: 'wrap'
    },
    quantityValue: {
        borderWidth: 2,
        borderColor: '#d3d3d3',
        borderStyle: 'solid',
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: fontScale * 14,
        fontWeight: 'bold'
    },
    descText: {
        color: '#747474',
        fontSize: fontScale * 12,
        marginBottom: 8

    }

});


export default ProductDetails;
