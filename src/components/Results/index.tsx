import { useParams } from "react-router"
import  { useGetPokemonListQuery } from "../../RD/API/Pokemons"
import Spinner from "./Spinners";
function Results() {
  const {pokemon} = useParams();

  const { data, isLoading, isSuccess, isFetching, error } = useGetPokemonListQuery()
  return (
   <div className="flex flex-row">
     <div className="w-3/5 h-screen overflow-y-auto px-10">
       {!isLoading && !isFetching && <Spinner />}
     </div>
   </div>
  )
}

export default Results