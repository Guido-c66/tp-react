import "./Landing.css";

const Hero = () => {

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Explora los personajes de tu serie favorita</h1>
                <p>Consumido desde una API publica</p>
                <button onClick={() => window.location.href='/personajes'}>Ver personajes</button>
            </div>
            <div className="hero-image">
                {<img src={"../src/assets/rick-and-morty.jpg"} alt='rick and morty'/>}
            </div>
        </section>

    )
}

export default Hero;
