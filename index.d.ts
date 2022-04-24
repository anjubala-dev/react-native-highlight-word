import type * as React from "react";

declare module "react-native-highlight-word" {
  export type HighLightProps = {
    /**
      * default value is empty
      * use type required
      */
     paragraph: string;
     /**
     *  default value is empty array of string
     *  pass the empty array 
     *  use type optional
     */
     substrings: Array[string]
     /**
     *  default value is 0
     *  pass the integer number for showing number of lines
     *  use type optional
     */
     numberOfLines: Number
    /**
     *  default value is empty object
     *  pass the object for text styling
     *  use type optional
     */
     paragraphStyle: object;
    /**
     *  default value is empty object
     *  pass the object for hightlight word styling
     *  use type optional
     */
     highlightStyle: object;
    /**
     *  onPressWord is function that use can get the value of selected word and it's index
     *  use type optional
     */
     onPressWord: function
  };

  export default class HighLight extends React.Component<HighLightProps> {
    
  }
}
