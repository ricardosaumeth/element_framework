import React from "react";
import { Dialog } from "@refinitiv-ui/elements/dialog";
import { createComponent } from "@lit-labs/react";

export default createComponent(React, "ef-dialog", Dialog, {
  onConfirm: "confirm",
  onCancel: "cancel"
});
