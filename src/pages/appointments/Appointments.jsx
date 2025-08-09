import afspraak from '../../assets/dentist.svg';
import Header from '../../components/header/Header.jsx';
import './Appointments.css';
import { Link } from 'react-router-dom';

function Appointments() {
  return (
    <main className="page-container">
      <Header icon={afspraak} title="Afspraken" />
      <p className="content-container-col3">
        Een afspraak maken bij Tandartspraktijk De Tandenborstel is eenvoudig en snel geregeld. Wij werken met flexibele openingstijden, zodat u altijd terecht kunt op een moment dat het u uitkomt. Heeft u last van pijn of een noodgeval? Neem dan direct contact met ons op – wij proberen u dezelfde dag nog te helpen.
        Tijdens uw afspraak nemen we de tijd om uw gebit grondig te controleren, uw vragen te beantwoorden en indien nodig een behandelplan op te stellen. Zo werken we samen aan een gezonde mond. Leer hier meer over tanden bleken voor een stralend witte glimlach!
      </p>
        <p>Leer <Link to={"/gaatjes"}>hier</Link> meer over gaatjes.</p>
    </main>
  );
}

export default Appointments;