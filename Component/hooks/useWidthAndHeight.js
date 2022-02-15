import {useEffect, useState} from "react";
import {Dimensions} from "react-native";


export const useWidthAndHeight = () => {
    const [currentHeightAndWeight, setCurrentHeightAndWeight] = useState({
        currentWeight: Dimensions.get('window').width,
        currentHeight: Dimensions.get('window').height
    });

    useEffect(() => {
        const callback = () => {
            setCurrentHeightAndWeight({
                currentWeight: Dimensions.get('window').width,
                currentHeight: Dimensions.get('window').height
            });
        };

        Dimensions.addEventListener("change", callback);
        return () => {
            Dimensions.removeEventListener('change', callback);
        };
    }, []);

    return currentHeightAndWeight;
}
