import { Form, Input, Checkbox } from "antd";
import Header from "../../component/header";
import { useState } from "react";
import "./contact.scss";
import { Button, FormControlLabel, TextField } from "@mui/material";

function Contact() {
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    setIsValid(true);
  };

  return (
    <>
      <Header />
      <div className="contact_container">
        <div className="contact_forms">
          <Form
            onFinish={handleSubmit}
            className="contact_form"
            labelCol={{ span: 24 }}
          >
            <div className="row">
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                className="form-item"
                label="Last name"
                name="lastName"
                required
              >
                <Input className="input" />
              </TextField>
              <TextField
                fullWidth
                className="form-item"
                label="User name"
                name="userName"
              >
                <Input className="input" />
              </TextField>
            </div>
            <div className="row-2">
              <TextField
                fullWidth
                className="form-item"
                label="City"
                name="city"
                style={{ width: "2500px", borderRadius: "50px" }}
              >
                <Input className="input" />
              </TextField>
              <TextField
                fullWidth
                className="form-item"
                label="State"
                name="state"
              >
                <Input className="input" />
              </TextField>
              <TextField fullWidth className="form-item" label="Zip" name="zip">
                <Input className="input" />
              </TextField>
            </div>

            <FormControlLabel
              control={<Checkbox name="terms" required />}
              label="Agree to terms and conditions"
              className="form-item"
            />

            <div className="submit-button-container">
              <Button variant="contained">Submit Form</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Contact;
