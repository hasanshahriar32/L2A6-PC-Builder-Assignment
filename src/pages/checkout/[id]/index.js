import Head from "next/head";
import MainLayout from "@/components/layout";
import { Layout } from "antd";
import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Divider,
  Typography,
  Row,
  Col,
  Select,
  Alert,
  Space,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // Implement your Stripe integration and form submission here
    setLoading(true);
    // Use Stripe to create a payment intent and handle payment logic
    setTimeout(() => {
      // After successful payment or processing, you can redirect to a confirmation page or perform other actions
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <Title level={2}>Checkout</Title>
      <Card>
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Alert
            message="Error!"
            description="This page is currently on development"
            type="error"
            banner
            closable
          />
        </Space>
        <br />
        <Form
          name="checkoutForm"
          onFinish={onFinish}
          layout="vertical"
          initialValues={{ country: "USA" }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  { required: true, message: "Please enter your first name" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  { required: true, message: "Please enter your last name" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="city"
                label="City"
                rules={[{ required: true, message: "Please enter your city" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  { required: true, message: "Please select your country" },
                ]}
              >
                <Select>
                  <Option value="USA">USA</Option>
                  {/* Add more country options as needed */}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="cardDetails"
            label="Card Details"
            rules={[
              { required: true, message: "Please enter your card details" },
            ]}
          >
            {/* Use a Stripe Elements or other payment input component */}
            <Input placeholder="Card Number" />
          </Form.Item>
          <Divider />
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Pay Now
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CheckoutPage;

CheckoutPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>Checkout Your Product</title>
        <meta
          name="description"
          content="Welcome to our pc building platform. Here you can organize and purchase your desired pc at affordable rate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>{page}</MainLayout>
    </Layout>
  );
};
