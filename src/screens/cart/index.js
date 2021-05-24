import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
const { height, fontScale, width } = Dimensions.get('window')
import Entypo from 'react-native-vector-icons/Entypo';

function Cart(props) {

    const { navigation } = props;
    useEffect(() => {

    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View>
                    <View style={styles.cartHeader}>
                        <TouchableOpacity onPress={() => navigation.navigate('home')}><Entypo name="cross" color="#f95a5b" size={30} /></TouchableOpacity>
                        <Text style={styles.cartHeaderText}>Basket</Text>
                    </View>

                    <View style={styles.cartBody}>
                        <View style={styles.articleRow}>
                            <Text style={styles.label}>
                                Articles (1)
                           </Text>
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>
                                    Total:
                                </Text>
                                <Text style={styles.totalPrice}>
                                    60450 FCFA
                                </Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.productRow}>
                                <View style={styles.productFrame}>
                                    <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/laptops.jpg')} />
                                </View>

                                <View style={styles.productInfo}>
                                    <Text style={styles.productInfoText}>HP laptop</Text>
                                    <Text style={styles.productInfoText}>Sold by: Tech-Zone</Text>
                                    <Text style={styles.productInfoText}>Quantity: 1</Text>
                                    <View style={styles.priceRow}>
                                        <Text style={styles.productInfoText}>25000 FCFA</Text>
                                        <Text style={[styles.price, styles.productInfoText]}>6500 FCFA</Text>
                                        <Text style={[styles.discount, styles.productInfoText]}>-20%</Text>

                                    </View>
                                </View>

                            </View>

                            <View style={styles.cardActions}>
                                <TouchableOpacity style={[styles.cardActionsBtn, styles.borderRight]}><Text style={styles.cardActionsBtnText}>Remove</Text></TouchableOpacity>
                                <TouchableOpacity style={[styles.cardActionsBtn, styles.borderLeft]}><Text style={styles.cardActionsBtnText}>Share</Text></TouchableOpacity>

                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.productInfoRow}>
                                <Text style={styles.productInfoText}>Total</Text>
                                <Text style={styles.productInfoText}>65000 FCFA</Text>
                            </View>

                            <View style={styles.productInfoRow}>
                                <Text style={styles.productInfoText}>Reduction</Text>
                                <Text style={styles.productInfoText}>2000 FCFA</Text>
                            </View>

                            <View style={styles.productInfoRow}>
                                <Text style={styles.productInfoText}>Sub-Total</Text>
                                <Text style={styles.productInfoText}>60450 FCFA</Text>
                            </View>
                        </View>

                        <Button
                            title='Pay (Total 7600 FCFA)'
                            color='#fd5240'
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eff1f8',
        flex: 1,
    },
    cartHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#c6c6c6',
        borderStyle: 'solid',
        height: height / 14,
        paddingLeft: 10,
        paddingRight: 10,
    },
    cartHeaderText: {
        fontSize: fontScale * 15
    },
    cartBody: {
        padding: 10
    },
    articleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30
    },
    label: {
        fontSize: fontScale * 15,
        fontWeight: 'bold'
    },
    totalRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalLabel: {
        fontSize: fontScale * 14.5,
        fontWeight: 'bold'
    },
    totalPrice: {
        fontSize: fontScale * 14.5,
        fontWeight: 'bold',
        color: '#73d82b',
        marginLeft: 5
    },
    card: {
        borderWidth: 1,
        borderColor: '#c6c6c6',
        borderStyle: 'solid',
        backgroundColor: 'white',
        padding: 8,
        paddingBottom: 0,
        marginBottom: 10

    },
    productRow: {
        flexDirection: 'row'
    },
    productFrame: {
        height: height / 8,
        width: width / 4,
        elevation: 1.5
        // backgroundColor: 'red'
    },
    productInfo: {
        paddingLeft: 4,
        paddingRight: 4,
        minHeight: 110,
        justifyContent: 'space-between',
        flexShrink: 1
    },
    productInfoText: {
        fontWeight: 'bold',
        fontSize: fontScale * 13,
    },
    priceRow: {
        flexDirection: 'row',

    },
    price: {
        textDecorationLine: 'line-through',
        marginLeft: 8
    },
    discount: {
        color: '#fe3e47',
        marginLeft: 8

    },
    cardActions: {
        flexDirection: 'row',
        marginTop: 15
    },
    cardActionsBtn: {
        width: '50%',
        height: height / 14,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#c6c6c6',
        borderStyle: 'solid',
    },
    cardActionsBtnText: {
        color: '#fe3e47',
        fontWeight: 'bold'
    },
    borderRight: {
        borderRightWidth: 1,
        borderRightColor: '#c6c6c6',
        borderStyle: 'solid',
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
    },
    productInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }
});


export default Cart;
