import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import theme from "../../assets/themes";

import SharedAlbumTitleCard from "../sharedAlbumTitleCard";
import Avatar from "./Avatar";
import ImageGallery from "./ImageGallery";
import backgroundImages from "../../assets/data/backgroundImages";

const SharedAlbum = ({ route }) => {
    const {album} = route.params;

    return (
        <ScrollView>
            <SharedAlbumTitleCard album={album}/>
            <View style={styles.avatarContainer}>
                <Avatar  avatars={album.avatars}/>
                <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>
            </View>
            <ImageGallery images={backgroundImages}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.colors.lightGray,
        marginVertical: theme.spacing.l,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.m,
    },
    avatarContainerText: {
        ...theme.textVariants.body3,
        color: theme.colors.black,
        opacity: 0.6,
    },
});

export default SharedAlbum;