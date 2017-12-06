// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
const images = {
    reduxFlow: require('../assets/reduxFlow.gif'),
    ourFlow: require('../assets/ourFlow.jpg')
}

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quarternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1700} contentHeight={1000}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={5} fit caps lineHeight={1} textColor="secondary">
              Hack at FAC
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
              with React
            </Text>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <BlockQuote>
              <Quote>"The test of a first-rate intelligence is the ability to hold two opposing ideas in mind at the same time and still retain the ability to function."</Quote>
              <Cite>F. Scott Fitzgerald</Cite>
            </BlockQuote>
            <Notes>
              <h4>False dictonomy</h4>
              <ol>
                <li>When you have an idea/methodology (web development) in your head, its common for your brain to reject opposing ideas</li>
                <li>You don't see people with two religions</li>
                <li>React had a lot of push back initially from the community because it defied a lot of the best practices that were around at the time</li>
                <li>I.E: Inline styles were deemed anti patterns, React embraced them because it was pragmatic, made sense</li>
                <li>Your brain will resist, its your job to fight back, true with learning anything</li>
              </ol>
            </Notes>
          </Slide>
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Learning Objectives</Heading>
            <List>
              <ListItem>Package management in Javascript (NPM) </ListItem>
              <ListItem>Functional Programming Fundamentals </ListItem>
              <ListItem>Redux and Asynchoronous Programming within React-Redux ecosystem</ListItem>
              <ListItem>Data flow: From database to page </ListItem>
            </List>
            <Notes>
              <h4>Sub-tpoics</h4>
              <ol>
                <li>NPM: Basic NPM commands, understanding semantic versioning, using packages in your Javascript</li>
                <li>FP: Why (point free, composable, readability), How: Basics: Map, Filter, Reduce. Where: Everywhere</li>
                <li>Redux: Concept (single source of truth (one store, read only state, pure functions), Redux store, Actions, Thunks, Immutability </li>
                <li>Selectors, Containers, Components, UI</li>
              </ol>
            </Notes>
          </Slide>
          <Slide>
              <Heading size={2} caps fit textColor="secondary" textFont="primary">
                Typical Redux Application Flow
              </Heading>
              <Image src={images.reduxFlow.replace('/', '')} margin="0px auto 40px" width={1000} height={750} />
          </Slide>
          <Slide>
              <Heading size={2} caps fit textColor="secondary" textFont="primary">
                Our Application Flow
              </Heading>
              <Image src={images.ourFlow.replace('/', '')} margin="0px auto 40px" width={1000} height={750} />
          </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Do learning objectives and big picture map
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
