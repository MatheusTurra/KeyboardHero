import { Notch, Switch, StarOrCloud, Container, Background } from "./styles";

export default function ToggleSwitcher({onClick, toggled}) {
  return(
    <>
      <Container>
        <Switch 
          onClick={onClick}
          isDarkModeOn={toggled}
        >
          <Notch isDarkModeOn={toggled} />
          <Background>
            <StarOrCloud className={`positionTop ${toggled ? "starMedium" : "cloudMedium"}`}/>
            <StarOrCloud className={`positionCenter ${toggled ? "starSmall" : "cloudMedium"}`}/>
            <StarOrCloud className={`positionBottom ${toggled ? "starBig" : "cloudBig"}`}/>
            <StarOrCloud className={toggled ? "extraStar" : "extraCloud"}/>
          </Background>
        </Switch>
      </Container>
    </>
  );
}