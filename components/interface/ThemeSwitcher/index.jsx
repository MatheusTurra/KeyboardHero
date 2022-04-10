import { 
  Notch,
  Switch,
  StarOrCloud,
  SkyBackground,
  MoonCraterSmall,
  MoonCraterMedium,
  MoonCraterBig 
} from "./styles";

export default function ThemeSwitcher({onClick, toggled}) {
  return(
    <>
      <Switch 
        onClick={onClick}
        isDarkModeOn={toggled}
      >
        <Notch isDarkModeOn={toggled}>
          <MoonCraterSmall isDarkModeOn={toggled}/>
          <MoonCraterMedium isDarkModeOn={toggled}/>
          <MoonCraterBig isDarkModeOn={toggled}/>
        </Notch>
        <SkyBackground>
          <StarOrCloud className={`positionTop ${toggled ? "starMedium" : "cloudMedium"}`}/>
          <StarOrCloud className={`positionCenter ${toggled ? "starSmall" : "cloudMedium"}`}/>
          <StarOrCloud className={`positionBottom ${toggled ? "starBig" : "cloudBig"}`}/>
          <StarOrCloud className={toggled ? "extraStar" : "extraCloud"}/>
        </SkyBackground>
      </Switch>
    </>
  );
}