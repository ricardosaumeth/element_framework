import React from "react";
import { RadioButton } from "@refinitiv-ui/elements/radio-button";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-radio-button", RadioButton, {
  onChange: "checked-changed"
});
