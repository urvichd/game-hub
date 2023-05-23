import { Card, CardBody, Image, Text, Heading } from "@chakra-ui/react";
import Game from "../hooks/useGames";
interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card
      boxSize={{ base: "400px", lg: "300px" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <Image src={game.background_image} />
      <CardBody>
        <Heading>
          <Text fontSize="2xl">{game.name}</Text>
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
