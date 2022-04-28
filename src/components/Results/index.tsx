import { useParams } from "react-router"
function Results() {
  const {pokemon} = useParams();
  return (
    <div>Results for: '{pokemon}'</div>
  )
}

export default Results