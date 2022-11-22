import React from "react";
import styled from "styled-components";
import PageButton from "./PageButton";
import NavConnect from "./NavConnect";
import NavFunction from "./NavFunction";

export default function Navbar() {
  return (
    <Container>
      <NavFunction />
      <div className="middle_nav buttonContainer buttonContainerTop ">
        <PageButton name={"Swap"} isBold={true} />
        <PageButton name={"Tokens"} />
        <PageButton name={"Pool"} />
      </div>
      <NavConnect/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  .buttonContainer {
  background-color: #fff;
  border-radius: 16px;
  display: inline-block;
}

.buttonContainerTop {
  margin-left: 175px;
}
`;
