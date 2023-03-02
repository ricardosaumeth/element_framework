import React from "react";
import { ComboBox } from "@refinitiv-ui/elements/combo-box";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-combo-box", ComboBox, {
  onChange: "value-changed"
});
