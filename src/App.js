import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import RouterComponent from './layout/routes/router';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterComponent />
      {/* <Home /> */}
    </ChakraProvider>
  );
}

export default App;
