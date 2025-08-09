import logo from '../../assets/toothbrushes.svg';
import Header from '../../components/header/Header';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="page-container">
      <Header icon={logo} title="Tandartspraktijk de Tandenborstel" />
      <p>
          Welkom bij Tandartspraktijk De Tandenborstel – uw vertrouwde adres voor een stralende glimlach en gezonde tanden.
      </p>
      <p className="content-container-col2">
          Ons team van ervaren tandartsen en mondhygiënisten staat klaar om u en uw gezin te helpen met de beste mondzorg. Op deze website vindt u informatie over onze behandelingen, hoe u eenvoudig een afspraak kunt maken en tips om uw gebit in topconditie te houden.
          Wij geloven in persoonlijke aandacht, een ontspannen sfeer en duidelijke uitleg over elke behandeling. Zo weet u altijd waar u aan toe bent. Leer hier meer over gaatjes en hoe u ze kunt voorkomen!
      </p>
        <p>Leer <Link to={"/tanden-bleken"}>hier</Link> meer over het bleken van tanden</p>
    </main>
  );
}

export default Home;