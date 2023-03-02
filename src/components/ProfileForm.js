import React, { useState } from "react";
import Button from "./Button";
import ComboBox from "./ComboBox";
import DatetimePicker from "./DatetimePicker";
import EmailField from "./EmailField";
import NumberField from "./NumberField";
import RadioButton from "./RadioButton";
import TextField from "./TextField";

const ProfileForm = ({ profile, setProfile, handleSubmit }) => {
  const [hasError, setHasError] = useState(false);

  const handleValueChange = (event) => {
    const valueType = event.target.id;
    setProfile({
      ...profile,
      [valueType]:
        valueType === "address" ? event.target.value : event.detail.value
    });
  };

  const handleCheckedRadio = (gender) => {
    setProfile({ ...profile, gender });
  };

  const handleErrorChange = (e) => {
    setHasError(e.detail.value);
  };

  const isConfirmDisabled = hasError || !profile.name || !profile.email;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor="name">Name *</label>
        <TextField
          id="name"
          className="form-field"
          onChange={handleValueChange}
        />
      </div>
      <div className="form-input">
        <label id="gender_group">Gender</label>
        <div role="radiogroup" aria-labelledby="gender_group">
          <RadioButton
            name="gender"
            value="male"
            checked={profile.gender === "male"}
            onChange={() => handleCheckedRadio("male")}
          >
            Male
          </RadioButton>
          <RadioButton
            name="gender"
            value="female"
            checked={profile.gender === "female"}
            onChange={() => handleCheckedRadio("female")}
          >
            Female
          </RadioButton>
          <RadioButton
            name="gender"
            value="not_disclose"
            checked={profile.gender === "not_disclose"}
            onChange={() => handleCheckedRadio("not_disclose")}
          >
            Prefer not to say
          </RadioButton>
        </div>
      </div>
      <div className="form-input">
        <label htmlFor="birthdate">Date of Birth</label>
        <DatetimePicker
          id="birthDate"
          className="form-field"
          onChange={handleValueChange}
        ></DatetimePicker>
      </div>
      <div className="form-input">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          className="form-field"
          rows="4"
          cols="50"
          value={profile.address}
          onChange={handleValueChange}
        ></textarea>
      </div>
      <div className="form-input">
        <label htmlFor="email">Email *</label>
        <EmailField
          id="email"
          className="form-field"
          placeholder="user@refinitiv.com"
          value={profile.email}
          onChange={handleValueChange}
          errorChange={handleErrorChange}
        ></EmailField>
      </div>
      <div className="form-input">
        <label>Expected Salary</label>
        <NumberField
          id="salary"
          className="form-field"
          step="1000"
          min="1000"
          value={profile.salary}
          onChange={handleValueChange}
        ></NumberField>
      </div>
      <div className="form-input">
        <label>Job position</label>
        <ComboBox
          id="position"
          className="form-field"
          data={[
            {
              label: "Customer Service (Full time)",
              value: "Customer Service (Full time)",
              selected: true
            },
            {
              label: "Customer Service (Part time)",
              value: "Customer Service (Part time)"
            },
            {
              label: "Stock Management Manager",
              value: "Stock Management Manager"
            }
          ]}
          value={profile.position}
          onChange={handleValueChange}
        ></ComboBox>
      </div>
      <Button disabled={isConfirmDisabled} onClick={handleSubmit}>
        Submit
      </Button>
    </form>
  );
};

export default ProfileForm;
