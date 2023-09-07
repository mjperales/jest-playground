import React from "react";
import { InputText, Icon } from "@washingtonpost/wpds-ui-kit";
import { Email } from "@washingtonpost/wpds-assets";

export default function Form() {
  return (
    <form onSubmit={() => console.log("submit")}>
      <InputText id="email" icon="left" label="Email">
        <Icon label="email">
          <Email />
        </Icon>
      </InputText>
    </form>
  );
}
