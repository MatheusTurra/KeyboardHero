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
          <StarOrCloud className={toggled ? "starMedium" : "cloudSmall"}/>
          <StarOrCloud className={toggled ? "starSmall" : "cloudMedium"}/>
          <StarOrCloud className={toggled ? "starBig" : "cloudBig"}/>
          <StarOrCloud className={toggled ? "extraStar" : "extraCloud"}/>
        </SkyBackground>
      </Switch>
    </>
  );
}