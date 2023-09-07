import React, { useState } from "react";
import { InputText, Icon, Button } from "@washingtonpost/wpds-ui-kit";
import { Email } from "@washingtonpost/wpds-assets";
import { Wrapper, FormStyled } from "../../styles/StyledComponents.styles";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleOnChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
    console.log(email);
  };
  return (
    <Wrapper>
      <h1>Example Form</h1>

      <FormStyled onSubmit={handleOnSubmit}>
        <InputText
          placeholder="Jane Doe"
          type="text"
          label="Name"
          id={"name"}
          name={"name"}
          value={name}
          onChange={handleOnChangeName}
          crossOrigin={undefined}
        />
        <InputText
          type="email"
          id="email"
          icon="left"
          label="Email"
          name={"email"}
          value={email}
          onChange={handleOnChangeEmail}
          crossOrigin={undefined}
        >
          <Icon label="email">
            <Email />
          </Icon>
        </InputText>
        <Button variant="primary" icon="left">
          Submit
        </Button>
      </FormStyled>
    </Wrapper>
  );
}
