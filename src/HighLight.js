import React from 'react'
import {
    StyleSheet,
    Text,
} from 'react-native'


const HighLight = ({
    paragraph,
    substrings = [],
    numberOfLines= 0,
    paragraphStyle = {},
    highlightStyle = {},
    onPressWord = () => {}
}) => {

    function normalString(stringValue) {
        return <Text key={stringValue} style={[styles.fontNormal, paragraphStyle]}>
            {stringValue}
        </Text>
    }

    function highlightString(stringValue) {
        const indexWord = substrings.findIndex(item => item == stringValue) 
        return <Text
            style={[styles.fontBold, highlightStyle]}
            key={stringValue}
            onPress={() => onPressWord({word: stringValue, position: indexWord})}
        >
            {stringValue}
        </Text>
    }

    const modifyParagraph = () => {
        let newParagraph = paragraph
        for (let sWord in substrings) {
            const word = substrings[sWord]
            newParagraph = newParagraph.replace(word, `[[[${word}]]]`);
        }
        return newParagraph;
    }

    const splitParagraph = (newParagraph) => {
        return newParagraph.split("[[[")
    }

    const generateNewParagraph = () => {

        const newParagraph = modifyParagraph()
        const arrSplitByHighLightWords =  splitParagraph(newParagraph)
        console.log(arrSplitByHighLightWords);
        let arrParagraph = []
        for (let indexWord in arrSplitByHighLightWords) {
            const getindex = arrSplitByHighLightWords[indexWord].indexOf("]]]")

            if (getindex >= 0) {
                let word = arrSplitByHighLightWords[indexWord].substring(0, getindex)
                arrParagraph.push(highlightString(word))
                arrParagraph.push(normalString(arrSplitByHighLightWords[indexWord].replace(`${word}]]]`, "")))
            }
            else {
                arrParagraph.push(normalString(arrSplitByHighLightWords[indexWord]))
            }
        }
        return arrParagraph
    }

    if (paragraph.length == 0) {
        return (<Text></Text>)
    }

    if (substrings.length == 0) {
        return normalString(paragraph)
    }
    return (<Text numberOfLines={numberOfLines}>{generateNewParagraph()}</Text>)
}

export default HighLight

const styles = StyleSheet.create({
    fontNormal: {
        fontSize: 20,
    },
    fontBold: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})