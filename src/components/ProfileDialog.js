import React from "react";
import Dialog from "./Dialog";
import Button from "./Button";

const ProfileDialog = ({ profile, opened, handleClickCancel }) => {
  if (!opened) {
    return;
  }
  return (
    <Dialog
      header="Submitted Form"
      opened={opened}
      onCancel={handleClickCancel}
    >
      <div className="form-input">
        <label>Name: {profile.name || "-"}</label>
      </div>
      <div className="form-input">
        <label>Gender: {profile.gender || "-"}</label>
      </div>
      <div className="form-input">
        <label>Email: {profile.email || "-"}</label>
      </div>
      <div className="form-input">
        <label>Birthdate: {profile.birthDate || "-"}</label>
      </div>
      <div className="form-input">
        <label>Address: {profile.address || "-"}</label>
      </div>
      <div className="form-input">
        <label>Position applied for: {profile.position || "-"}</label>
      </div>
      <div className="form-input">
        <label>Expected Salary: {profile.salary || "-"}</label>
      </div>
      <div slot="footer" style={{ padding: "5px 10px" }}>
        <Button style={{ width: "100%" }} cta onClick={handleClickCancel}>
          Close
        </Button>
      </div>
    </Dialog>
  );
};

export default ProfileDialog;
