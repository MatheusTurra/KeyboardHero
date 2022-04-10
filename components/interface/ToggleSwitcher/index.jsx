import { Notch, Switch, StarOrCloud, SkyContainer } from "./styles";

export default function ToggleSwitcher() {
  return(
    <>
      <Switch>
        <Notch />
        <SkyContainer>
          <StarOrCloud className="positionTop sizeMedium"/>
          <StarOrCloud className="positionCenter sizeSmall"/>
          <StarOrCloud className="positionBottom sizeBig"/>
        </SkyContainer>
      </Switch>
    </>
  );
}