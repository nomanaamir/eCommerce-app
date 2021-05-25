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
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

const { height, fontScale, width } = Dimensions.get('window')


function Navbar(props) {

    const { navigation } = props;
    const [isDropdown, setIsDropdown] = useState(false);
    const categories = [
        'Boutique',
        'Best Sellers',
        'Novelties',
        'Flash sale',
        'Discoveries'
    ]
    useEffect(() => {

    }, []);


    return (
        <View style={styles.navbar}>
            <View style={styles.header}>
                <View style={styles.col1}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Feather name="menu" color="white" size={25} />
                    </TouchableOpacity>
                </View>



                <View style={styles.col2}>
                    <View>
                        <View style={{ height: height / 10 }}>
                            <Image resizeMode='cover' source={require('../../../assets/Icon-72-trans.png')} />
                        </View>
                        {/* <Ionicons name="logo-amazon" color="black" size={40} /> */}
                    </View>
                    <TouchableOpacity onPress={() => setIsDropdown(!isDropdown)}>
                        <Feather name="user" color="white" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'relative' }}>
                        <SimpleLineIcons name="bag" color="white" size={22} />
                        <View style={styles.cartIndicator}>
                            <Text style={styles.cartIndicatorText}>
                                0
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    isDropdown ?
                        <View style={styles.userDropdown}>
                            <View style={styles.userDropdownCol1}>

                                <View style={{
                                    height: height / 14, width: width / 7,
                                    // backgroundColor: 'black',
                                    borderWidth: 2,
                                    borderColor: '#cccccc',
                                    borderStyle: 'solid',
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Feather name="user" color="#cccccc" size={30} />
                                </View>

                                <View style={styles.userInfo}>
                                    <Text style={styles.userInfoText}>
                                        User
                            </Text>
                                    <Text style={styles.userInfoText}>
                                        mail@mail.com
                            </Text>
                                    <Text style={styles.userInfoList}>
                                        <Feather name="user" color="#9d9d9d" size={18} />{' '}
                                My account
                            </Text>
                                    <Text style={styles.userInfoList}>
                                        <FontAwesome5 name="id-card" color="#9d9d9d" size={15} /> {' '}
                                My profile
                            </Text>
                                    <Text style={styles.userInfoList}>
                                        <Feather name="log-out" color="#9d9d9d" size={16} /> {' '}
                                Logout
                            </Text>
                                </View>
                            </View>
                        </View>
                        : null
                }

            </View>

            <TextInput
                placeholder='Search'
                inlineImageLeft='search_icon'
                inlineImagePadding={8}
                style={styles.searchField}
                returnKeyType="search"
                placeholderTextColor="#999999"
            />

            <FlatList
                horizontal={true}
                pagingEnabled
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: 8 }}
                showsHorizontalScrollIndicator={false}
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoriesItem} onPress={() => navigation.navigate('categoryDetails')}>
                        <Text style={styles.categoriesItemText}>{item}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#fd5240',
        padding: 10,
        paddingTop: 0,
    },
    header: {
        // position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',

    },
    col1: {
        width: '40%',
        // backgroundColor: 'yellow'
    },
    col2: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    searchField: {
        backgroundColor: 'white',
        padding: 8,
        fontSize: fontScale * 14
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'yellow',
        marginTop: 5
    },
    categoriesItem: {
        width: width / 3,
        height: height / 22,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: 'white',
    },
    categoriesItemText: {
        color: 'white'
    },
    cartIndicator: {
        position: 'absolute',
        top: -12,
        right: -4
    },
    cartIndicatorText: {
        color: 'white'
    },
    userDropdown: {
        backgroundColor: 'white',
        // height: height / 4,
        width: width / 1.5,
        position: 'absolute',
        // right: '15%',
        right: width / 3 - 25,
        // left:width/2 -25,
        top: '20%',
        zIndex: 1

    },
    userDropdownCol1: { flexDirection: 'row', padding: 10, },
    userInfo: {
        paddingLeft: 5
    },
    userInfoText: {
        fontWeight: 'bold',
        fontSize: fontScale * 14
    },
    userInfoList: {
        fontWeight: 'bold',
        color: '#9d9d9d',
        fontSize: fontScale * 12,
        marginTop: 5

    }
});

function mapStateToProps(state) {
    return {
        navigation: state.root.navigation_props,
    }
}
function mapDispatchToProps(dispatch) {
    return ({

    })
}
export default connect(mapStateToProps, null)(Navbar);
