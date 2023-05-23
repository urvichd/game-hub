import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
function CriticsScore({ score }: Props) {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return <Badge colorScheme={color}>{score}</Badge>;
}
export default CriticsScore;
