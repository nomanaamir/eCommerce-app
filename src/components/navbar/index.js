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
    TextInput
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { height, fontScale } = Dimensions.get('window')


function Navbar(props) {

    const { navigation } = props;
    useEffect(() => {

    }, []);


    return (
        <View style={styles.navbar}>
            <View style={styles.header}>
                <View style={styles.col1}>
                    <TouchableOpacity>
                        <Feather name="menu" color="white" size={25} />
                    </TouchableOpacity>
                </View>



                <View style={styles.col2}>
                    <View>
                        <Ionicons name="logo-amazon" color="black" size={40} />
                    </View>
                    <TouchableOpacity>
                        <Feather name="user" color="white" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="shopping-cart" color="white" size={25} />
                    </TouchableOpacity>
                </View>

            </View>

            <TextInput
                placeholder='Search'
                inlineImageLeft='search_icon'
                inlineImagePadding={8}
                style={styles.searchField}
                returnKeyType="search"
                placeholderTextColor="#999999"
            />

            <View style={styles.categories}>
                <TouchableOpacity style={styles.categoriesItem}>
                    <Text style={styles.categoriesItemText}>Boutique</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoriesItem}>
                    <Text style={styles.categoriesItemText}>Best Sellers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoriesItem}>
                    <Text style={styles.categoriesItemText}>Novelties</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoriesItem}>
                    <Text style={styles.categoriesItemText}> Flash sale</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.categoriesItem}>
                    <Text style={styles.categoriesItemText}>Discoveries</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#fd5240',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    col1: {
        width: '45%',
        // backgroundColor: 'yellow'
    },
    col2: {
        width: '55%',
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
        width: '33%',
        height: height / 22,
        // backgroundColor: 'yellow',
        justifyContent: 'center'
        // backgroundColor: 'white',
    },
    categoriesItemText:{
        color: 'white'
    }
});


export default Navbar;
