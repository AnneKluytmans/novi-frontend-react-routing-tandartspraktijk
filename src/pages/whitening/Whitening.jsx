import Header from '../../components/header/Header';
import bleken from '../../assets/tooth-whitening.svg';
import './Whitening.css';

function Whitening() {
  return (
    <main className="page-container">
      <Header icon={bleken} title="Bleken"/>
      <p>
          Een witte glimlach geeft zelfvertrouwen en laat u stralen. Met onze professionele bleekbehandelingen bereiken we op een veilige manier het gewenste resultaat. We gebruiken enkel methodes die goedgekeurd zijn door tandheelkundige organisaties, zodat uw gebit gezond blijft.
      </p>
      <p>
          Iedere mond is uniek, daarom starten wij altijd met een intake. Samen bespreken we uw wensen, bekijken we de huidige kleur van uw tanden en bepalen we welke behandeling het beste bij u past. Zo krijgt u een persoonlijk plan en weet u precies wat u kunt verwachten.
      </p>
      <p>
          Onze behandelingen zorgen voor een zichtbaar verschil na slechts één sessie. Afhankelijk van uw wensen en het startpunt kan het resultaat variëren van een subtiele opfrissing tot een duidelijk wittere glimlach. Met de juiste mondverzorging blijft het effect langdurig zichtbaar.
      </p>
      <p>
          Tanden bleken is geschikt voor de meeste volwassenen met gezonde tanden en tandvlees. Heeft u vullingen of kronen? Dan bespreken we hoe we het kleurverschil kunnen minimaliseren. Uw veiligheid en tevredenheid staan altijd voorop bij Tandartspraktijk De Tandenborstel.
      </p>
    </main>
  );
}

export default Whitening;