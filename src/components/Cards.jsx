import '../styles/Cards.css'; // importez votre fichier de styles CSS ici

function Cards() {
  const logements = [
    {
      id: 1,
      title: 'Titre de la location',
    },
    {
      id: 2,
      title: 'Titre de la location',
    },
    {
      id: 3,
      title: 'Titre de la location',
    },
    {
      id: 4,
      title: 'Titre de la location',
    },
    {
      id: 5,
      title: 'Titre de la location',
    },
    {
      id: 6,
      title: 'Titre de la location',
    },
  ];

  return (
    <div className="container">
      <div className="cards-container">
        {logements.map(logement => (
          <div className="card" key={logement.id}>
            <div className="card-content">
              <p>{logement.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
