import { useEffect, useState } from "react";

export default function Result(props) {
  const [accuracy, setAccuracy] = useState(0);

   useEffect(() => {
     if(props.keyPresses > 0) {
       const accuracyCalc = (props.correctKeyPresses / props.keyPresses) * 100;

       setAccuracy(accuracyCalc.toFixed());
     }
  }, [props.correctKeyPresses]);
    return(
    <>
      <div>
        <span>: {accuracy}</span>
      </div>
    </>
  );
}