import {StyleSheet, View,ScrollView, SafeAreaView} from 'react-native';
import {Header} from "./View/header/Header";
import {Content} from "./View/content/Content";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {useState} from "react";

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
}

export default function App() {

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    if (!isDataLoaded) {
        return (
            <View>
                <AppLoading
                    startAsync={fetchFonts}
                    onFinish={()=> setIsDataLoaded(true)}
                    onError={(error)=> console.warn(error)}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.wrapper}>
            <ScrollView >
                <Header/>
                <Content/>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
});
