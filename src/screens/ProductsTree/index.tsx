
import React, { useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { tick } from '../../assets/images/index';
import { TREE_DATA } from "utils/constants";

interface SubCategory {
    id: number;
    title: string;
    subCategory?: SubCategory[];
}

interface SampleData {
    id: number;
    title: string;
    selected?: boolean;
    subCategory?: SubCategory[];
}

const ProductsTree: React.FC = () => {

    const [selectedItems, setSelectedItems] = useState<SampleData[]>([]);
    const [selectedVariants, setSelectedVariants] = useState<string[]>([]);
    const [sampleData, setSampleData] = useState<SampleData[]>(TREE_DATA);

    const onTagPress = (item: SampleData, isSelected: boolean, parentItem?: SampleData) => {
        let selectedTypesTemp = [...selectedItems];
        let selectedVariantsTemp = [...selectedVariants];
        if (isSelected) {
            selectedTypesTemp = selectedTypesTemp.filter((_item) => _item.id !== item.id);
            if (item.subCategory?.length > 0) {
                selectedVariantsTemp = selectedVariantsTemp.filter((_item) => _item !== `all ${item.title} devices selected`);
            }
            else {
                selectedVariantsTemp = selectedVariantsTemp.filter((_item) => _item !== `${parentItem?.title} ${item.title} selected`);
            }
        } else {
            selectedTypesTemp.push(item);
            if (item.subCategory?.length > 0) {
                selectedVariantsTemp.push(`all ${item.title} devices selected`);
            }
            else {
                selectedVariantsTemp.push(`${parentItem?.title} ${item.title} selected`);
            }
        }
        setSelectedItems(selectedTypesTemp);
        setSelectedVariants(selectedVariantsTemp);
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: "center"
        }}>
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
            >
                {sampleData.map((item, _index) => {
                    const isSelected = selectedItems.findIndex((_item) => _item.id === item.id) > -1;
                    return (
                        <View key={item.id} style={{ padding: 10 }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        onTagPress(item, isSelected);
                                    }}
                                    style={styles.boxStyle}>
                                    {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    let tempData = [...sampleData];
                                    tempData[_index].selected = !tempData[_index].selected;
                                    setSampleData(tempData);
                                }}>
                                    <Text>{item.title}</Text>
                                </TouchableOpacity>
                            </View>
                            {item.selected && item.subCategory?.map((subItem, index) => {
                                const isSelected = selectedItems.findIndex((_item) => _item.id === subItem.id) > -1;
                                return (
                                    <View key={subItem.id} style={{ padding: 10 }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <TouchableOpacity
                                                style={styles.boxStyle}
                                                onPress={() => {
                                                    onTagPress(subItem, isSelected, item);
                                                }}
                                            >
                                                {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                let tempData = [...sampleData];
                                                tempData[_index].subCategory![index].selected = !tempData[_index].subCategory![index].selected;
                                                setSampleData(tempData);
                                            }}>
                                                <Text>{subItem.title}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        {subItem.selected && subItem.subCategory?.map((subSubItem, index3) => {
                                            const isSelected = selectedItems.findIndex((_item) => _item.id === subSubItem.id) > -1;
                                            return (
                                                <View key={subSubItem.id} style={{ padding: 10 }}>
                                                    <View style={{ flexDirection: "row" }}>
                                                        <TouchableOpacity
                                                            style={styles.boxStyle}
                                                            onPress={() => {
                                                                onTagPress(subSubItem, isSelected, subItem);
                                                            }}
                                                        >
                                                            {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                                        </TouchableOpacity>
                                                        <TouchableOpacity onPress={() => {
                                                            let tempData = [...sampleData];
                                                            tempData[_index].subCategory![index].subCategory![index3].selected = !tempData[_index].subCategory![index].subCategory![index3].selected;
                                                            setSampleData(tempData);
                                                        }}>
                                                            <Text>{subSubItem.title}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {subSubItem.selected && subSubItem.subCategory?.map((subSubSubItem, index4) => {
                                                        const isSelected = selectedItems.findIndex((_item) => _item.id === subSubSubItem.id) > -1;
                                                        return (
                                                            <View key={subSubSubItem.id} style={{ padding: 10 }}>
                                                                <View style={{ flexDirection: "row" }}>
                                                                    <TouchableOpacity
                                                                        style={styles.boxStyle}
                                                                        onPress={() => {
                                                                            onTagPress(subSubSubItem, isSelected, subSubItem);
                                                                        }}
                                                                    >
                                                                        {isSelected && <Image style={{ width: 15, height: 15, resizeMode: "contain" }} source={tick} />}
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity onPress={() => {
                                                                        let tempData = [...sampleData];
                                                                        tempData[_index].subCategory![index].subCategory![index3].subCategory![index4].selected = !tempData[_index].subCategory![index].subCategory![index3].subCategory![index4].selected;
                                                                        setSampleData(tempData);
                                                                    }}>
                                                                        <Text>{subSubSubItem.title}</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        )
                                                    })}
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
            </ScrollView>
            <View style={{ margin: 20 }}>
                <Text style={{ fontWeight: "bold" }}>Selected Variants:</Text>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', gap: 10 }}>
                    {selectedVariants.map((item, index) => {
                        return (
                            <View key={index} style={styles.selectedVariantView}>
                                <Text>{item}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    boxStyle: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    selectedVariantView: {
        marginRight: 10,
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10
    }
})

export default ProductsTree;
