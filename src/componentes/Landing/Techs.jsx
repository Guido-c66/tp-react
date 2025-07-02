import "./Landing.css";

const Techs = () => {

    return (
        <section>
            <div className="tech">
                <div className="imagenes">
                    <a href="https://vite.dev" target="_blank">
                        <img src={"src/assets/vite.svg"} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={"src/assets/react.svg"} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>Vite + React</h1>
            </div>
        </section>

    )
}

export default Techs;
