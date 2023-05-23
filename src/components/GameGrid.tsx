import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      <Text color="red">{error}</Text>
      <SimpleGrid
        columns={{ xl: 3, lg: 3, md: 2, sm: 1 }}
        padding="10px"
        rowGap={8}
        justifyContent={"space-between"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
