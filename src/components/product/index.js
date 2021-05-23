import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { height, width, fontScale } = Dimensions.get('window')


function Product(props) {
    const [sliderIndex, setSliderIndex] = useState(0)
    const { navigation, product } = props;
    const { name,
        discountPrice,
        price,
        tag,
        discount,
        img } = product;


    useEffect(() => {

    }, []);


    return (
        <TouchableOpacity style={styles.product}>
            <View style={styles.productFrame}>
                <Image style={{ height: '100%', width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} source={img} />
                {
                    tag ?
                    <View style={styles.tag}><Text style={styles.tagText}>{tag}</Text></View>
                    :
                    null
                }
                <View style={styles.discount}><Text style={styles.discountText}>-{discount}</Text></View>
            </View>

            <View style={styles.productInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.discountPrice}>{discountPrice} F CFA</Text>
                <Text style={styles.price}>{price} F CFA</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    product: {
        height: height / 2.6,
        width: width / 2.2,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        borderStyle: 'solid',
        margin: 3,
        borderRadius: 8
    },
    productFrame: {
        position: 'relative',
        borderTopLeftRadius: 8, borderTopRightRadius: 8,
        flex: 2,
        width: width / 2.2
    },
    tag: {
        position: 'absolute',
        backgroundColor: '#6fd625',
        padding: 8,
        paddingRight: 10,
        paddingLeft: 10,
        left: 2,
        top: 2,
        borderRadius: 12
    },
    tagText: {
        color: 'white',
        fontSize: fontScale * 9
    },
    discount: {
        position: 'absolute',
        backgroundColor: '#fd5240',
        right: 2,
        top: 2,
        height: height / 16,
        width: width / 8,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    discountText: {
        color: 'white',
        fontSize: fontScale * 7
    },
    productInfo: {
        flex: 1,
        justifyContent: 'center',
        padding: 5,
        paddingTop: 0,
        paddingBottom: 0,

    },
    name: {
        fontSize: fontScale * 15,
        fontWeight: 'bold'
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
        textDecorationLine: 'line-through'
    }
});


export default Product;
