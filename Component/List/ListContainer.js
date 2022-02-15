import React from "react";
import {View, ScrollView} from "react-native";
import {ListItem} from "./ListItem";

export const ListContainer = ({dataList}) => {
    return (
        <View>
            <ScrollView>
                {dataList.map(dataItem => <ListItem key={dataItem} item={dataItem}/>)}
            </ScrollView>
        </View>
    )
};


