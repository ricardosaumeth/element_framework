import React, { useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ProfileForm from "./components/ProfileForm";
import ProfileDialog from "./components/ProfileDialog";
import "./styles.css";

export default function App({ theme }) {
  const [showDialog, setShowDialog] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    gender: "",
    birthDate: "",
    address: "",
    email: "",
    salary: "",
    position: ""
  });

  const handleClickConfirm = () => {
    console.log("profile =", profile);
    setShowDialog(false);
  };

  return (
    <ef-panel spacing>
      <ThemeSwitcher theme={theme} />
      <h1>Sample Store Employment Form</h1>
      <ProfileForm
        profile={profile}
        setProfile={setProfile}
        handleSubmit={() => setShowDialog(true)}
      />
      <ProfileDialog
        opened={showDialog}
        handleClickConfirm={handleClickConfirm}
        handleClickCancel={() => setShowDialog(false)}
        profile={profile}
      />
    </ef-panel>
  );
}
