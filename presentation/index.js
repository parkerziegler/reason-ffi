// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Code,
  List,
  ListItem,
  Slide,
  Text,
  Image,
  CodePane,
  Fill,
  Layout
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
  quarternary: "#A8A6A1",
  code: "#2a2734"
}, {
  primary: "Space Mono",
  secondary: "Montserrat"
});

const bsModuleSource = `[@bs.module "urql"]
external query : (~query: string, ~variables: 'vars=?, unit) => urqlQuery = "";
`;

const bsDerivingAbstractSource = `type variables;

[@bs.deriving abstract]
type urqlQuery = {
  query: string,
  [@bs.optional] /* marks field as optional */
  variables, /* use the abstract type variables above */
};
`;

const urqlClientSource = `[@bs.deriving abstract]
type urqlClientConfig = {
  url: string,
};

type urqlClient;

[@bs.new] [@bs.module "urql"]
external client : urqlClientConfig => urqlClient = "Client";

[@bs.send]
external executeQuery :
  (urqlClient, Query.urqlQuery, bool) => Js.Promise.t('a) =
  "";
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
          <Heading size={1} caps lineHeight={1} textColor="black" textSize={54} textAlign="left">
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
            <Heading size={1} caps lineHeight={1} textColor="black" textSize={54}>
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
          <Heading size={1} lineHeight={1} textColor="white" textSize={22} textAlign="left" style={{ margin: "10px" }}>
            Let's Bind the Query API from Urql
          </Heading>
          <CodePane lang="reason" source={bsModuleSource} textSize={18} />
        </Slide>
        <Slide transition={["fade"]} bgColor="reason">
          <Heading size={1} lineHeight={1} fit textColor="white" style={{ textDecoration: "underline" }}>
            What the heck is all of this syntax?
          </Heading>
          <Layout style={{ flexDirection: "column", textAlign: "left", margin: "20px" }}>
            <Fill style={{ margin: "15px" }} textColor="white" textSize={30}>
              <Code textColor="white" textSize={30}>[@bs.module "urql"]</Code>
              <Text textColor="white" textSize={30}>
                We have an <Code textColor="white" textSize={30}>external</Code> JS module called <Code textColor="white" textSize={30}>urql</Code></Text>
            </Fill>
            <Fill style={{ margin: "15px" }}>
              <Code textColor="white" textSize={30}>external query</Code>
              <Text textColor="white" textSize={30}>
                In the <Code textColor="white" textSize={30}>urql</Code> module, there's something called <Code textColor="white" textSize={30}>query</Code>
              </Text>
            </Fill>
            <Fill style={{ margin: "15px" }}>
              <Code textColor="white" textSize={30}>: (~query: string, ~variables: 'vars=?, unit)</Code>
              <Text textColor="white" textSize={30}>
                <Code textColor="white" textSize={30}>query</Code> is a function that takes a required, labeled argument <Code textColor="white" textSize={30}>query</Code> and an optional labeled argument <Code textColor="white" textSize={30}>variables</Code>
              </Text>
            </Fill>
            <Fill style={{ margin: "15px" }}>
              <Code textColor="white" textSize={30}>= urqlQuery = ""</Code>
              <Text textColor="white" textSize={30}>
                The function returns something of type <Code textColor="white" textSize={30}>urqlQuery</Code>
              </Text>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="reason">
          <Heading size={1} lineHeight={1} fit textColor="white">So now we can use <Code textColor="white" textSize={20}>query</Code> in our Reason code!</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="reason">
          <Heading size={1} lineHeight={1} fit textColor="white">But wait, Parkie-Doo, what was that <Code textColor="white" textSize={20}>urqlQuery</Code> being returned?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="code">
          <Heading size={1} lineHeight={1} textColor="white" textSize={22} textAlign="left" style={{ maring: "10px" }}>
            urqlQuery is a JS object containing keys for query and variables
          </Heading>
          <CodePane lang="reason" source={bsDerivingAbstractSource} textSize={18} />
        </Slide>
        <Slide transition={["fade"]} bgColor="reason">
          <Heading size={1} lineHeight={1} fit textColor="white">So now that we can write a query, how could we actually execute one?</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="code">
          <Heading size={1} lineHeight={1} textColor="white" textSize={22} textAlign="left" style={{ margin: "10px" }}>
            Let's bind the Client API from Urql
          </Heading>
          <CodePane lang="reason" source={urqlClientSource} textSize={18} />
        </Slide>
        <Slide transition={["fade"]} bgColor="reason">
          <Heading size={1} lineHeight={1} textColor="white" textSize={80} style={{ margin: "15px" }}>Introducing</Heading>
          <Code textColor="white" textSize={60} style={{ margin: "15px" }}>urql-reason</Code>
          <i><Text textColor="white" textSize={30} style={{ margin: "15px" }}>Urql Bindings for ReasonML</Text></i>
        </Slide>
      </Deck>
    );
  }
}
