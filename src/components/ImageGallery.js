import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import theme from "../../assets/themes";

const ListImage = ({ image }) => {
    return (
        <Image
            source={image.background}
            style={styles.galleryImage}
        />
    );
};


const ImageGallery = ({ images }) => {
    return(
        <View style={styles.galleryContainer}>
            <Text style={styles.galleryText}>Photos</Text>

            {/* List here */}
            <FlatList
                data={images}
                keyExtractor={item => item.id}
                numColumns={3}
                scrollEnabled={false}
                renderItem={({item}) => <ListImage image={item}/>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    galleryContainer: {
        alignItems: "center",
        marginBottom: theme.spacing.l,
    },
    galleryText: {
        ...theme.textVariants.body3,
        color: theme.colors.black,
        opacity: 0.6,
    },
    galleryImage: {
        height: theme.imageHeight.l,
        width: theme.imageHeight.l,
        margin: 2,
    },
});

export default ImageGallery;