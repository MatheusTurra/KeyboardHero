import { Notch, Switch, StarOrCloud, Container, Background } from "./styles";

export default function ToggleSwitcher({onClick, toggled}) {
  return(
    <>
      <Container>
        <Switch 
          onClick={onClick}
          isDarkModeOn={toggled}
        >
          <Notch isDarkModeOn={toggled}/>
          <Background isDarkModeOn={toggled}>
            <StarOrCloud className="positionTop sizeMedium"/>
            <StarOrCloud isDarkModeOn={toggled} className={`positionCenter sizeSmall`}/>
            <StarOrCloud className="positionBottom sizeBig"/>
          </Background>
        </Switch>
      </Container>
    </>
  );
}