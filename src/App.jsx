import React from "react";
import { Layout, Row, Col } from "antd";
import AppHeader from "./components/Header";
import ContactForm from "./components/Form";
import CardItem from "./components/CardItem";

const { Content, Footer } = Layout;

export default function App() {
  return (
    <Layout>
      <AppHeader />

      <Content style={{ padding: "40px 20px" }}>
        <Row justify="center" gutter={[16, 16]}>
          <Col>
            <CardItem title="React" description="Powerful UI library for building apps." />
          </Col>
          <Col>
            <CardItem title="Ant Design" description="Elegant and professional design system." />
          </Col>
          <Col>
            <CardItem
              title="Styled Components"
              description="Write CSS directly in your JS files."
            />
          </Col>
        </Row>

        <ContactForm />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Created by Aleksandr
      </Footer>
    </Layout>
  );
}
