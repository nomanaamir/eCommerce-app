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

    const { navigation } = props;
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
                        </View>
                        <View style={styles.categoriesItem_name}>
                            <Text numberOfLines={1}>
                                {item.name}
                            </Text>
                        </View>
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
    },
    categoriesItem_frame_img: {
        height: '100%',
        width: '100%'
    },
    categoriesItem_name: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 5
    }
});


export default Categories;
