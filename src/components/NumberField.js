import React from "react";
import { NumberField } from "@refinitiv-ui/elements/number-field";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-number-field", NumberField, {
  onChange: "value-changed"
});
