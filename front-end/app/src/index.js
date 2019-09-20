import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import appStore from "./models/appStore";

const store = new appStore();

render(
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);
