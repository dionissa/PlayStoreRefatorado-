import games from '../games';


function Cards() {
  return (
    <div>
      {games.map((game) => (
        <article key={game.number}>
          <figure>
            <img src={`./${game.number}.webp`} alt={`Imagem do ${game.name}`} />
            <figcaption>{game.name}</figcaption>
          </figure>
          <div className="tag">-{game.discount}</div>
          <div className="price">
            <span>{`R$ ${game.price}`}</span>
            <span className="oldPrice">{`R$ ${game.oldPrice}`}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Cards