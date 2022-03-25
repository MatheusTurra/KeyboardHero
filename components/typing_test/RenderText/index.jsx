export default function RenderText(props) {
  const splittedText = props.text.split(" ");

  return(
    <>
      {splittedText.map((word, index) => {
        return(
          <span>
            {word}
          </span>
        );
      })}
    </>
  );
}