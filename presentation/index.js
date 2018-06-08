// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Code,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import ReasonLogo from "../assets/reason-logo.png";
import ReasonMeme from "../assets/reason-meme.jpg";
import BuckleScriptLogo from "../assets/bucklescript.png";

// Require CSS
require("normalize.css");


const theme = createTheme({
  white: "#fff",
  reason: "#db4d3f",
  black: "#000",
  bucklescript: "#ab5ea3",
  quarternary: "#a1a1a1"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="white">
          <Image src={ReasonLogo} alt="Reason" height={200} />
          <Heading size={1} fit caps lineHeight={1} textColor="reason">
            FFI === Food For Interop
          </Heading>
          <Text margin="10px 0 0" textColor="black" size={1} fit bold>
            Writing Reason Bindings for JS Libraries
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="black">
          <Image src={ReasonMeme} alt="Reason is hot." height="100%" />
        </Slide>
        <Slide transition={["fade"]} bgColor="white" textColor="black">
          <Image src={BuckleScriptLogo} alt="BuckleScript" height={600} />
        </Slide>
        <Slide transition={["fade"]} bgColor="reason" textColor="white">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <List>
              <ListItem style={{ color: "black", margin: "10px" }}>
                <Code>[@bs.module]</Code>
                <Text margin="10px 0px 10px 50px" textColor="black" textSize={30}>
                  Binding to a JS module
                </Text>
              </ListItem>
              <ListItem style={{ color: "black", margin: "10px" }}>
                <Code>[@bs.send]</Code>
                <Text margin="10px 0px 10px 50px" textColor="black" textSize={30}>
                  Binding to JS external (typically an object)
                </Text>
              </ListItem>
              <ListItem style={{ color: "black", margin: "10px" }}>
                <Code>[@bs.deriving abstract]</Code>
                <Text margin="10px 0px 10px 50px" textColor="black" textSize={30}>
                  Creating a JS object of fixed shape
                </Text>
              </ListItem>
            </List>
          </div>
        </Slide>
      </Deck>
    );
  }
}
