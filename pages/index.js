import ThemeSwitcher from "../components/interface/ThemeSwitcher";
import WordChecker from "../components/typing_test/WordChecker";

import { useState } from "react";

export default function Home() {
  const [toggled, setToggled] = useState(true);

  function handleToggleSwitch() {
    setToggled(prevState => !prevState);
  }

  console.log(toggled)
  return (
    <>
      <ThemeSwitcher toggled={toggled} onClick={handleToggleSwitch}/>
      <WordChecker />
    </>
  );
}
