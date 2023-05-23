import useGames from "../hooks/useGames";
import { Text } from "@chakra-ui/react";
function GameGrid() {
  const { games, error } = useGames();
  return (
    <>
      <Text color="red">{error}</Text>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
