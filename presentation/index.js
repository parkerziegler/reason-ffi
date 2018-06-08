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
  Image,
  CodePane
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
  bsblue: "#17c4ae",
  bsbluebg: "#26d2bc",
  quarternary: "#a1a1a1",
  code: "#2a2734"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const bsModuleSource = `[@bs.module "urql"]
external query : (~query: string, ~variables: 'vars=?, unit) => urqlQuery = "";
`;

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
        <Slide transition={["fade"]} bgColor="bsbluebg" textColor="black">
          <Image src={BuckleScriptLogo} alt="BuckleScript" height={600} />
        </Slide>
        <Slide transition={["fade"]} bgColor="bsbluebg" textColor="black">
          <Heading size={1} caps lineHeight={1} textColor="black" textSize={72} textAlign="left">
            BuckleScript
          </Heading>
          <List>
            <ListItem style={{ color: "black", margin: "10px" }}>
              Compiles OCaml or Reason to JS
            </ListItem>
            <ListItem style={{ color: "black", margin: "10px" }}>
              Provides [@bs] annotations for interop
            </ListItem>
            <ListItem style={{ color: "black", margin: "10px" }}>
              Generates <i>human readable</i> output
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="bsbluebg" textColor="white">
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Common BuckleScript Helpers
            </Heading>
            <List>
              <ListItem style={{ color: "black", margin: "10px" }}>
                <Code>[@bs.module]</Code>
                <Text margin="10px 0px 10px 60px" textColor="black" textSize={30}>
                  Binding to a JS module
                </Text>
              </ListItem>
              <ListItem style={{ color: "black", margin: "10px" }}>
                <Code>[@bs.send]</Code>
                <Text margin="10px 0px 10px 60px" textColor="black" textSize={30}>
                  Attaching a method to external JS object
                </Text>
              </ListItem>
              <ListItem style={{ color: "black", margin: "10px" }}>
                <Code>[@bs.deriving abstract]</Code>
                <Text margin="10px 0px 10px 60px" textColor="black" textSize={30}>
                  Creating a JS object of fixed shape
                </Text>
              </ListItem>
            </List>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="code">
          <Heading size={1} caps lineHeight={1} textColor="white" textSize={22} textAlign="left">
            Let's Bind the Query API from URQL
          </Heading>
          <CodePane lang="reason" source={bsModuleSource} textSize={18} />
        </Slide>
      </Deck>
    );
  }
}
