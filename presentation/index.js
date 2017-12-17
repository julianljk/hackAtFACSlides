// Import React
import React from "react";
import CounterExample from './counterExample.jsx';
// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
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
    ourFlow: require('../assets/ourFlow.jpg'),
    semanticVersion: require('../assets/semanticVersion.png')
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
              <ListItem>React and state </ListItem>
              <ListItem>Redux and Asynchoronous Programming within React-Redux ecosystem</ListItem>
              <ListItem>Functional Programming Fundamentals </ListItem>
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
          <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Basic NPM commands</Heading>
            <List>
              <ListItem><Code>npm install</Code> - Installs the dependecies in your <Code>package.json</Code></ListItem>
              <ListItem><Code>npm install &lt;package-name&gt;</Code> - Installs specified package</ListItem>
              <ListItem><Code>npm uninstall &lt;package-name&gt;</Code> - Uninstalls specified package </ListItem>
              <ListItem><Code>npm ls &lt;package-name&gt;</Code> - Checks the version of installed package </ListItem>
            </List>
            <Notes>
              <h4>Talk about --save</h4>
            </Notes>
          </Slide>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>What happens when you <Code>npm install</Code></Heading>
            <List>
              <ListItem>Creates a directory called <Code>node_modules</Code> in the same directory as your <Code>package.json</Code> file</ListItem>
              <ListItem>Installs packages according to semantic versioning rules</ListItem>
            </List>
          </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.semanticVersion.replace('/', '')} margin="0px auto 40px"/>
          <Heading size={6} textColor="tertiary" caps>Semantic Versioning Basics</Heading>
          <Text size={6} textColor="secondary"><Code>^</Code> (Carret) - Updates to latest major version</Text>
          <Text size={6} textColor="secondary"><Code>~</Code> (Tilde) - Updates to latest minor version version</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>Assignment</Heading>
          <Text size={6} textColor="secondary">Install the following packages: </Text>
          <Text size={6} textColor="secondary">react-redux, redux, redux-thunk </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>React</Heading>
          <Text size={6} textColor="secondary">Using state and setState, basic component lifecycle, events</Text>
          <Text size={6} textColor="secondary">Also will cover, ES6 classes, ES6 import/export, arrow functions and `this` keyword, </Text>
          <Notes>
            <ol>
              <li>Create a counter and printer component (with state) - should be easy, they've done the tutorial </li>
              <li>Do it with redux store. </li>
              <li>Refactor into its own component (and then copy it multiple times in App) </li>
              <li>Explain : when to use redux, state vs store.</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>Create a counter</Heading>
          <Text size={6} textColor="secondary">Using state and setState, basic component lifecycle, events</Text>
          <Text size={6} textColor="secondary">Also will cover, ES6 classes, ES6 import/export, arrow functions and `this` keyword, </Text>
          <Notes>
            <ol>
              <li>Create a counter and printer component (with state) - should be easy, they've done the tutorial </li>
              <li>Factor those components out, make observations about set state </li>
              <li>Do it with redux store. </li>
              <li>Refactor into its own component (and then copy it multiple times in App) </li>
              <li>Explain : when to use redux, state vs store.</li>
            </ol>
          </Notes>
        </Slide>
        <Slide>
          <CounterExample />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>Make it more modular!</Heading>
          <Text size={6} textColor="secondary">Seperate printer and slider to their respective components</Text>
          <Text size={6} textColor="secondary">One acts as a control, and the other acts as a receiver of that control data.</Text>
          <Notes>
            <ol>
              <li>Create a counter and printer component (with state) - should be easy, they've done the tutorial </li>
              <li>Do it with redux store. </li>
              <li>Refactor into its own component (and then copy it multiple times in App) </li>
              <li>Explain : when to use redux, state vs store.</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>Let's make some observations!</Heading>
          <Text size={6} textColor="secondary">What happens when setState gets called?</Text>
          <Text size={6} textColor="secondary">When does render get called?</Text>
          <Notes>
            <ol>
              <li>Slow down timer. Put breakpoints on constructors, setStates and renders</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>What we know so far:</Heading>
          <Text size={6} textColor="secondary">Everytime we call setState on a component, render gets called.</Text>
          <Text size={6} textColor="secondary">Everytime render gets called, it recursively calls render on its children.</Text>
          <Notes>
            <ol>
              <li>Slow down timer. Put breakpoints on setStates and renders</li>
            </ol>
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="tertiary" caps>Redux</Heading>
          <Text size={6} textColor="secondary">High Level Concept</Text>
          <List>
            <ListItem>Single source of truth - Multiple sources obfuscates logic</ListItem>
            <ListItem>State is read-only - The only way to mutate it is with an ACTION </ListItem>
            <ListItem>Changes are made with pure functions - Other people are looking at state! Don't change it without telling them</ListItem>
          </List>
          <Notes>
            <ol>
              <li>Create a counter and printer component (with state) - should be easy, they've done the tutorial </li>
              <li>Do it with redux store. </li>
              <li>Refactor into its own component (and then copy it multiple times in App) </li>
              <li>Explain : when to use redux, state vs store.</li>
            </ol>
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
