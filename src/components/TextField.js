import React from "react";
import { TextField } from "@refinitiv-ui/elements/text-field";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-text-field", TextField, {
  onChange: "value-changed"
});
