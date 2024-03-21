import satImage from "../images/satImageT.png";
export const Banner = () => {
  return (
    <>
      <header>
        <img id="satImage" src={satImage} />
        <span id="orbit">Orbit</span>
        <span id="report">REPORT</span>
      </header>
      <p>
        Click on the <span class="testsDoBeLikeThatSometimes">orbit report</span> buttons to see
        the satellites in that orbit type
      </p>
    </>
  );
}
