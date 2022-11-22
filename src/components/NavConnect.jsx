import React from "react";
import styled from "styled-components";
import { Connect } from "./Connect";

export default function NavConnect() {
  return (
    <Container>
      ConnectButton <Connect />{" "}
    </Container>
  );
}

const Container = styled.div``;
