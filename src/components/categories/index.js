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
    TextInput,
    FlatList,
    Image
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { height, width, fontScale } = Dimensions.get('window')


function Categories(props) {

    const { navigation, title, discountTag } = props;
    const items = [
        {
            img: require('../../../assets/mobiles.jpg'),
            name: 'Mobiles'
        },
        {
            img: require('../../../assets/laptops.jpg'),
            name: 'Laptops'
        },
        {
            img: require('../../../assets/clothes.jpg'),
            name: 'Clothes'
        },
        {
            img: require('../../../assets/kitchen.jpg'),
            name: 'Kitchen Items'
        },
        {
            img: require('../../../assets/kitchen.jpg'),
            name: 'Kitchen Items'
        }
    ]
    useEffect(() => {

    }, []);


    return (
        <View style={styles.categories}>
            <FlatList
                horizontal={true}
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}

                showsHorizontalScrollIndicator={false}
                data={items}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoriesItem}>
                        <View style={styles.categoriesItem_frame}>
                            <Image style={styles.categoriesItem_frame_img} source={item.img} />
                           {
                               discountTag ?
                               <View style={styles.discount}><Text style={styles.discountText}>-10%</Text></View>
                               :
                               null
                           }
                        </View>
                        {
                            title ?

                                <View style={styles.categoriesItem_name}>
                                    <Text numberOfLines={1}>
                                        {item.name}
                                    </Text>
                                </View>
                                : null
                        }
                    </TouchableOpacity>
                )}
            // horizontal={true}
            // keyExtractor={(item, index) => index.toString()}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    categories: {
        height: height / 5,
        padding: 10
    },
    categoriesItem: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: '#e6e6e6',
        borderStyle: 'solid',
        width: width / 3,
        margin: 5
    },
    categoriesItem_frame: {
        flex: 2,
        position: 'relative'
    },
    categoriesItem_frame_img: {
        height: '100%',
        width: '100%'
    },
    discount: {
        position: 'absolute',
        backgroundColor: '#fd5240',
        right: 2,
        top: 2,
        height: height / 18,
        width: width / 9,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    discountText: {
        color: 'white',
        fontSize: fontScale * 7
    },
    categoriesItem_name: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5
    }
});


export default Categories;
