import { Card, CardBody, Image, Text, Heading, HStack } from "@chakra-ui/react";
import Game from "../hooks/useGames";
import CriticsScore from "./CriticsScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  return (
    <Card
      width={`300px`}
      boxSize={{ base: "400px", lg: "300px" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      <CardBody>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Heading>
          <Text fontSize="2xl">{game.name}</Text>
        </Heading>
        <HStack justifyContent={"space-between"} padding={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
