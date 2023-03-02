import React from "react";
import { EmailField } from "@refinitiv-ui/elements/email-field";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-email-field", EmailField, {
  onChange: "value-changed",
  errorChange: "error-changed"
});
