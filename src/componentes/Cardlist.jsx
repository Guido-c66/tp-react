import "./Cardlist.css";
import { useState } from "react";
import Card from "../Card/Card";
import Error from "../ApiComponents/Error";
import Loading from "../ApiComponents/Loading";
import { useAxios } from "../../servicios/useAxios";

const API_URL = "https://rickandmortyapi.com/api/character";

function Cardlist() {
    
    const [search, setSearch] = useState("");
    const { data: characters, loading, error } = useAxios(API_URL);
    const characterList = characters.results || [];
    
    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    // Filtro, "" siempre esta incluido
    const filtro = characterList.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  ) || [];


    return (
    <div className="characters-page">
      <input type="text" placeholder="Buscar personajes..." value={search} 
        onChange={e => setSearch(e.target.value)} className="search-input" />
      <div className="cards-container">
        {filtro.map(char => (
            <Card key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Cardlist;
