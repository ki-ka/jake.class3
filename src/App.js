import { CssModules } from "./componemts/CssModules";
import { Emotion } from "./componemts/Emotion";
import { InlineStyle } from "./componemts/InlineStyle";
import { StyledComponents } from "./componemts/StyledComponents";
import { StyledJsx } from "./componemts/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div classsName="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
