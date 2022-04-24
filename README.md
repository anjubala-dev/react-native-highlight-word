# react-native-highlight-word



## Installation

#### # Using npm

```bash
npm install react-native-highlight-word
```

#### # Using yarn

```bash
yarn add react-native-highlight-word
```

## Demo

#### Code provided in Examples folder.

<!-- [![Screenshot1.gif](https://i.postimg.cc/jjpKJqR8/Screenshot1.gif)](https://postimg.cc/sB4bkrQS)
[![Screenshot2.gif](https://i.postimg.cc/L50xn5p5/Screenshot2.gif)](https://postimg.cc/XBdfPVX6) -->

## Usage

```
import HighLight from 'react-native-highlight-word';

...

const onPressHightlightWord = (value) => {
    console.log(value)
}
...

<HighLight
    paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industr"
    substrings={["Ipsum", "typesetting"]}
    paragraphStyle={{ fontSize: 20 }}
    highlightStyle={{ fontSize: 20, color: '#2980b9' }} 
    onPressWord={onPressHightlightWord}/>
    
```

### Props

- [`paragraph`](#string)

- [`substrings`](#Array[string])

- [`numberOfLines`](#int)

- [`paragraphStyle`](#showFlag)

- [`highlightStyle`](#linkStyle)

- [`onPressWord`](#function)





### paragraph

paragraph is present default value

| Type  | Required |
| ----- | -------- |
| string  | Yes      |

---

### substrings

substrings is array of strings

| Type  | Required |
| ----- | -------- |
| array | No       |

---

### numberOfLines

numberOfLines for showing lines of string, default is 0

| Type  | Required |
| ----- | -------- |
| int   | No      |

---

### paragraphStyle

paragraphStyle object for text/string, you can pass the default style of string/paragraph

| Type     | Required |
| -------- | -------- |
| object   | No       |

---

### highlightStyle

style object for hightlight word/words

| Type     | Required |
| -------- | -------- |
| object | No       |

---

### onPressWord

onPressWord is function, if use tap on hightlight word then get the value of word and it's index

| Type     | Required |
| -------- | -------- |
| function | No       |

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
