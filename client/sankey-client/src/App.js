import 'devextreme/dist/css/dx.light.css';
import './App.css';
import Sankey, {
  Tooltip,
  Link,
  Node, Label, Font, LoadingIndicator,
} from 'devextreme-react/sankey';
import {useState, useEffect} from "react";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/")
        .then(res => res.json())
        .then(res => setData(res));
  }, []);
  return (
      <TransformWrapper>
        <TransformComponent>
          <Sankey id="sankey"
                  dataSource={data}
                  sourceField="source"
                  targetField="target"
                  weightField="weight"
                  title="Sankey Demo"
          >
            <LoadingIndicator

            enabled={true}/>
            <Tooltip
                enabled={true}
                customizeLinkTooltip={customizeLinkTooltip}
            >
            </Tooltip>
            <Link
                colorMode="gradient">
            </Link>
            <Node
                width={8}
                padding={50}>
            </Node>
            <Label
                horizontalOffset="15"
            >
              <Font
                  size="10px"
              />
            </Label>
          </Sankey>
        </TransformComponent>
      </TransformWrapper>
  );
}
function customizeLinkTooltip(info) {
  return {
    html: `<b>From:</b> ${info.source}<br/><b>To:</b> ${info.target}<br/><b>Weight:</b> ${info.weight}`,
  };
}
export default App;
