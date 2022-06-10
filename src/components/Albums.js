import React, { useLayoutEffect, useRef } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../assets/themes/index";
import { Feather } from '@expo/vector-icons'; 
import BottomSheet from 'reanimated-bottom-sheet';

import albumPage from "../../assets/data/albumPage";
import Separator from "./Separator";
import BottomSheetContent from "./BottomSheetContent";

import Card from "./Card";

const Albums = ({ navigation, navigation: { setOptions } }) => {

    const sheetRef = useRef();

    useLayoutEffect(() => {
        setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={openBottomSheet}>
                    <View style={styles.openSheetButton}>
                        <Feather name="plus" size={16} color={theme.colors.white}/>
                    </View>
                </TouchableOpacity>
            )
        })
    })

    const renderBottomSheetContent = () => <BottomSheetContent handleClose={closeBottomSheet} />
    const closeBottomSheet = () => {
        sheetRef.current.snapTo(1);
    };
    const openBottomSheet = () => {
        sheetRef.current.snapTo(0);
    };

    return (
        <> 
            <ScrollView>
                <View>
                    <Text style={styles.uiText}>This is just the UI</Text>
                </View>
                <View style={styles.albumContainer}>
                    {albumPage.map((item, index) => 
                        <View key={index}>
                            <Card item={item} navigation={navigation}/>

                            {/*  add seperator if the index is 1  */}
                            {index === 1 && <Separator />}  
                        </View>          
                    )}
                </View>
            </ScrollView>   

            <BottomSheet
                ref={sheetRef}
                snapPoints={[250, 0]}
                initialSnap={1}
                borderRadius={10}
                renderContent={renderBottomSheetContent}
            />
        </>
    );
};

const styles = StyleSheet.create({
    albumContainer: {
        marginBottom: theme.spacing.l,
    },
    openSheetButton: {
        width: 32,
        height: 32,
        backgroundColor: theme.colors.primary,
        marginRight: theme.spacing.m,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    uiText: {
        ...theme.textVariants.body1,
        alignSelf: "center",
        marginTop: theme.spacing.sm,
        color: "red",
    }
})

export default Albums;