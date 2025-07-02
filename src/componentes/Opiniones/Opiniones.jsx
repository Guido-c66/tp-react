import "./Opiniones.css";
import Error from "../ApiComponents/Error";
import Loading from "../ApiComponents/Loading";
import { useAxios } from "../../servicios/useAxios";

const API_URL = "https://jsonplaceholder.typicode.com/comments";

function Opiniones() {
    const { data: review, loading, error } = useAxios(API_URL);
    const opiniones = [];

    if (loading) return <Loading />;
    if (error) return <Error message={error} />;

    for (let i=0; i<=14; i++) {
        opiniones.push(
            <div key={review[i].name} className="card">
                <p className="opinion">"{review[i].body}"</p>
                <p className="name">{review[i].name}, <span className="email">{review[i].email}</span></p>
            </div>
        )
    }

    return (
        <section className="landing">
            <div className="container">
                {opiniones}
            </div>
        </section>
  );
}

export default Opiniones;
