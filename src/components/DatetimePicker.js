import React from "react";
import { DatetimePicker } from "@refinitiv-ui/elements/datetime-picker";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-datetime-picker", DatetimePicker, {
  onChange: "value-changed"
});
