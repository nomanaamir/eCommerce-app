import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ActivityIndicator,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Categories from '../../components/categories/index';
import Slider from '../../components/slider/index';
import Product from '../../components/product/index'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { setNavigationProps } from '../../Store/Middlewares/middlewares';
const { height, fontScale } = Dimensions.get('window')


function Home(props) {
    // require('../../../assets/mobiles.jpg'),
    // require('../../../assets/laptops.jpg'),
    // require('../../../assets/clothes.jpg'),
    // require('../../../assets/kitchen.jpg'),
    // require('../../../assets/kitchen.jpg'),
    const novelties = [
        {
            name: 'KTM',
            discountPrice: '135 000',
            price: '150 000',
            tag: 'Nouveau',
            discount: '19%',
            img: require('../../../assets/mobiles.jpg')
        },
        {
            name: 'Montres',
            discountPrice: '60 450',
            price: '65 000',
            tag: 'Nouveau',
            discount: '7%',
            img: require('../../../assets/laptops.jpg')
        }
    ]
    const bestSellers = [
        {
            name: 'Smart Lighning',
            discountPrice: '2 250',
            price: '2 500',
            tag: '',
            discount: '19%',
            img: require('../../../assets/clothes.jpg')
        },
        {
            name: 'vxr',
            discountPrice: '8 100',
            price: '9 000',
            tag: '',
            discount: '7%',
            img: require('../../../assets/kitchen.jpg')
        }
    ]
    const discoveries = [
        require('../../../assets/clothes.jpg')
    ]
    const videoInformative = [
        require('../../../assets/mobiles.jpg'),
        require('../../../assets/laptops.jpg'),
    ]
    const { navigation } = props;
    useEffect(() => {
        props.setNavigationPropsAction(navigation);
    }, []);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
            >
                <View>
                    <Categories title={true} discountTag={false} />
                    <Slider />

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name="circle" color="#999999" size={15} />
                            <Text style={styles.cardHeaderText}>Novelties</Text>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.cardBodyRow}>
                                {
                                    novelties.map((item, index) => {
                                        return (
                                            <Product navigation={navigation} product={item} key={index} />
                                        )
                                    })
                                }
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name="circle" color="#999999" size={15} />
                            <Text style={styles.cardHeaderText}>Discoveries</Text>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.cardBodyCol}>
                                {
                                    discoveries.map((item, index) => {
                                        return (
                                            <TouchableOpacity style={styles.banner} key={index}>
                                                <Image style={{ height: '100%', width: '100%' }} source={item} />
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name="circle" color="#999999" size={15} />
                            <Text style={styles.cardHeaderText}>Best Sellers</Text>
                        </View>

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

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name="circle" color="#999999" size={15} />
                            <Text style={styles.cardHeaderText}>View Informative</Text>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.cardBodyCol}>
                                {
                                    videoInformative.map((item, index) => {
                                        return (
                                            <TouchableOpacity style={styles.banner} key={index}>
                                                <Image style={{ height: '100%', width: '100%' }} source={item} />
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>

                        </View>
                    </View>

                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <MaterialCommunityIcons name="circle" color="#999999" size={15} />
                            <Text style={styles.cardHeaderText}>Special Telephones</Text>
                        </View>

                        <View style={styles.cardBody}>
                            <View style={styles.cardBodyRow}>
                                {
                                    novelties.map((item, index) => {
                                        return (
                                            <Product navigation={navigation} product={item} key={index} />
                                        )
                                    })
                                }
                            </View>
                        </View>
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
    card: {
        // backgroundColor: 'red',
        padding: 10
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 35,
        padding: 4
    },
    cardHeaderText: {
        marginLeft: 4,
        fontSize: fontScale * 14
    },
    cardBodyRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    banner: {
        height: height / 4,
        marginBottom: 10,
    }
});

function mapStateToProps(state) {

    return {
    }
}
function mapDispatchToProps(dispatch) {
    return ({
        setNavigationPropsAction: (navigation) => { dispatch(setNavigationProps(navigation)) },
    })
}
export default connect(null, mapDispatchToProps)(Home);
