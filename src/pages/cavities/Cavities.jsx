import Header from '../../components/header/Header';
import gaatjes from '../../assets/dentist.svg';
import './Cavities.css';
import {useNavigate} from "react-router-dom";

function Cavities() {
    const navigate = useNavigate();

    function handleClick() {
        console.log('We gaan direct door naar de afspraken pagina!');
        navigate('/afspraken');
    }

    return (
        <main className="page-container">
          <Header icon={gaatjes} title="Gaatjes" />
          <p>
              Gaatjes, ook wel cariës genoemd, zijn een van de meest voorkomende tandproblemen. Ze ontstaan wanneer bacteriën in tandplak suikers omzetten in zuren, die vervolgens het tandglazuur aantasten. Zonder behandeling kunnen gaatjes groter worden en leiden tot pijn, ontstekingen of zelfs verlies van tanden.
              Bij Tandartspraktijk De Tandenborstel vullen wij gaatjes met moderne, duurzame materialen die passen bij de kleur van uw tanden. Zo blijft uw gebit mooi én gezond. Wilt u een afspraak maken voor controle of behandeling?
          </p>
          <button type="button" onClick={handleClick} className="appointment-button">
            Maak direct uw afspraak!
          </button>
          <p className="content-container-col3">
              Gaatjes ontstaan wanneer tandplak bacteriën suikers omzetten in zuren die het tandglazuur aantasten. In het begin merkt u daar vaak niets van, maar zonder behandeling kan een gaatje leiden tot pijn, gevoeligheid en uiteindelijk tandverlies.
              In de beginfase merkt u vaak niets van een gaatje. Daarom is het belangrijk om regelmatig een controle-afspraak te maken bij uw tandarts. Hoe eerder we een gaatje ontdekken, hoe kleiner de ingreep en hoe beter het resultaat.
          </p>
        </main>
      );
}

export default Cavities;