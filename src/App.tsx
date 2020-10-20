import React, { Component } from 'react';
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  NodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams"
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import './App.css';
import MiniDrawer from "./components/MiniDrawer";

class App extends Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

  var engine = createEngine();
  var model = new DiagramModel();
  var node1 = new DefaultNodeModel({
    name: "Node 1",
    color: "rgb(0,192,255)",
  });
  node1.setPosition(100, 100);
  let port1 = node1.addOutPort("");

  var node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
  let port2 = node2.addInPort("");
  let port2Out = node2.addOutPort("");
  node2.setPosition(400, 100);

  var node3 = new DefaultNodeModel("Node 3", "rgb(0,192,255)");
  let port3 = node3.addInPort("");
  node3.setPosition(700, 100);

  // let customNode = new NodeModel([]);

  let link1 = port1.link<DefaultLinkModel>(port2);
  link1.getOptions().testName = "senderTo";
  link1.getOptions().color = "red";
  link1.addLabel("\uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9");

  let link2 = port2Out.link<DefaultLinkModel>(port3);
  link2.getOptions().testName = "toReceiver";
  link2.getOptions().color = "red";
  link2.addLabel("\uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9 \uD83D\uDCA9");

  model.addAll(node1, node2, node3, link1, link2);
  engine.setModel(model);

    return (
        <div>
          <MiniDrawer />
          <CanvasWidget engine={engine} className="canvas" />
        </div>

    );
  }
}

export default App;
