import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  width: 300px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

export default function CardItem({ title, description }) {
  return (
    <StyledCard title={title}>
      <p>{description}</p>
    </StyledCard>
  );
}
