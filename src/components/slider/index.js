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


function Slider(props) {
    const [sliderIndex, setSliderIndex] = useState(0)
    const { navigation } = props;
    const items = [
        require('../../../assets/clothes.jpg'),
        require('../../../assets/mobiles.jpg'),
        require('../../../assets/laptops.jpg'),
        require('../../../assets/kitchen.jpg'),
        require('../../../assets/kitchen.jpg'),
    ]
    useEffect(() => {

    }, []);


    return (
        <ScrollView style={styles.productGalleryScroll} contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
            <FlatList
                data={items}
                horizontal={true}
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}

                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.galleryContainer}>
                        <Image style={{ height: '100%', width: '100%' }} source={item} />
                    </TouchableOpacity>
                )}
                onMomentumScrollEnd={(event) => {
                    let sliderIndex = event.nativeEvent.contentOffset.x ? event.nativeEvent.contentOffset.x / width : 0
                    setSliderIndex(sliderIndex)
                }}
                onScrollToIndexFailed={() => { }}
            />


            <View style={styles.indicatorRow}>
                {
                    items.map((item, index) => {
                        return (
                            <View key={index} style={styles.indicators}>
                                <View style={styles.indicatorsOff}>
                                    {
                                        sliderIndex == index ? <View style={styles.indicatorsOn} /> : null
                                    }
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    productGalleryScroll: {
        height: height / 3.5,
        width: width,
    },
    galleryContainer: {
        width: width / 1,
        height: height / 3.5,
    },
    indicatorRow: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 4,
    },
    indicatorsOff: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: '#958f98',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    indicatorsOn: {
        height: 12,
        width: 12,
        borderRadius: 12,
        backgroundColor: '#fe0000',
    },
});


export default Slider;
