import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav"  "aside main"`,
        }}
        h="100px"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          {/* <HStack> */}
          <NavBar />

          {/* </HStack> */}
        </GridItem>
        <Show above="lg">
          <GridItem bg="yellow.300" area={"aside"}>
            Aside
          </GridItem>
        </Show>
        <GridItem bg="pink.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
