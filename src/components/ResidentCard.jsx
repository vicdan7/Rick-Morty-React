import useFetch from "../hooks/useFetch";
import './styles/residentCard.css'

const ResidentCard = ( { url } ) => {

  const [resident] = useFetch(url)

return (
   <article className="resident">
     <header className="resident-header">
       <img className="resident-img" src={resident?.image} alt="" />
        <div className="resident-status">
            <div className={`resident-Scircle ${resident?.status}`}></div>
            <span className="resident-Slabel">{resident?.status}</span>
        </div>
      </header>
      <section className="resident-body">
        <h2 className="resident-name">{resident?.name}</h2>
        <hr className="resident-hr" />
        <ul className="resident-list">
          <li className="resident-item"><span className="resident-label">Specie: </span>{resident?.species}</li>
          <li className="resident-item"><span className="resident-label">Origin: </span>{resident?.origin.name}</li>
          <li className="resident-item"><span className="resident-label">Eppisodes where appear: </span>{resident?.episode.length}</li>
       </ul>
     </section>
   </article>
  );
}

export default ResidentCard
