import React from "react";
import styled from "styled-components";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const StyledHeader = styled(Header)`
  background-color: #001529;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export default function AppHeader() {
  return (
    <StyledHeader>
      <Title level={3} style={{ color: "#fff", margin: 0 }}>
        Ant Design
      </Title>
    </StyledHeader>
  );
}
