import React from "react";
import { Toggle } from "@refinitiv-ui/elements/toggle";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-toggle", Toggle, {
  onChange: "checked-changed"
});
