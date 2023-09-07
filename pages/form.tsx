import React from "react";
import { InputText, Icon, styled, Button } from "@washingtonpost/wpds-ui-kit";
import { Email } from "@washingtonpost/wpds-assets";

const Wrapper = styled("div", {
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-around",
  alignItems: "center",
  alignContent: "center",
});

const FormStyled = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$050",
});

const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log("submit");
};

export default function Form() {
  return (
    <Wrapper>
      <h1>Example Form</h1>

      <FormStyled onSubmit={handleOnSubmit}>
        <InputText placeholder="Jane Doe" type="text" label="Name" />
        <InputText id="email" icon="left" label="Email">
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
