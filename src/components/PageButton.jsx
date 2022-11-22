import React from "react";
import styled from "styled-components";

export default function PageButton(props) {
  return (
    <Container>
      <div className="btn_page">
        <span className = {props.isBold ? "pageButtonBold hoverBold" : "hoverBold"}>{props.name} </span>
      </div>
    </Container>
  );
}

const Container = styled.div`
    color: red;
`;
