import Head from "next/head";
import MainLayout from "@/components/layout";
import {
  Layout,
  Card,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Rate,
  List,
} from "antd";
import { Image } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const { Meta } = Card;
const { Title } = Typography;

export default function ProductDetailPage({
  product,
  setCartCount,
  cartCount,
}) {
  const route = useRouter();
  const [reviewFormVisible, setReviewFormVisible] = useState(false);
  const [reviews, setReviews] = useState(product.reviews || []);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || {};
    const totalQuantity = Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
    // setCartCount(totalQuantity);
  }, [setCartCount, cartCount]);
  const [cartItems, setCartItems] = useState({});

  // Load cart items from local storage on component mount
  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(cartFromStorage);
  }, []);

  const handleAddToCart = (item) => {
    const { product_id: itemId, product_name: itemName } = item;

    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || {};

    // Clone the existing cart items
    const newCartItems = { ...existingCartItems };

    // Check if the item is already in the cart
    if (newCartItems[itemId]) {
      // If the item is already in the cart, show an alert
      alert(`${itemName} is already in the cart.`);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      newCartItems[itemId] = 1;

      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(newCartItems));

      // Show a success message
      alert(`Added ${itemName} to the cart.`);
    }

    // Update the state with the new cart items
    setCartItems(newCartItems);
  };

  const handleCheckout = (id) => {
    route.push(`/checkout/${id}`);
    // Implement your checkout functionality here
  };

  const handleReviewSubmit = (values) => {
    const newReview = {
      reviewer_name: values.name,
      reviewer_email: values.email,
      reviewer_rating: values.rating,
      reviewer_comment: values.comment,
    };

    // You can send the new review to your backend here and update the state
    // For simplicity, we're just updating the state locally
    setReviews([...reviews, newReview]);
    setReviewFormVisible(false);
  };

  return (
    <>
      <Head>
        <title>{product?.product_name} Details</title>
        {/* Add your meta tags and other head elements here */}
      </Head>
      <div style={{ padding: "20px" }}>
        <Card
          cover={<Image  
                alt={product?.product_name} 
                src={product?.product_image} 
                fallback="data:image/png;base64,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"
                height={500}
                style={{
                  objectFit: "cover",
                }} 
                />}
          hoverable
        >
          <Meta
            title={product?.product_name}
            description={product?.product_description}
          />
          <p>Price: ${product?.product_price.toFixed(2)}</p>
          <p>Stock: {product?.product_stock} available</p>
          <p>Rating: {product?.rating}</p>
          <p>Reviews: {product?.reviews_count}</p>
          <p>Category: {product?.product_category}</p>
          <p>Status: {product?.product_status}</p>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Button
                type="primary"
                block
                onClick={() => handleAddToCart(product)}
                icon={<i className="fas fa-cart-plus"></i>}
              >
                Add to Cart
              </Button>
            </Col>
            <Col span={12}>
              <Button
                type="primary"
                block
                onClick={() => handleCheckout(product?.product_id)}
                icon={<i className="fas fa-shopping-cart"></i>}
              >
                Checkout
              </Button>
            </Col>
          </Row>
          <br />
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Button
                type="primary"
                block
                onClick={handleAddToCart}
                icon={<i className="fas fa-cart-plus"></i>}
              >
                Build Personal Computer
              </Button>
            </Col>
          </Row>
        </Card>

        <div style={{ marginTop: "20px" }}>
          <Title level={3}>Product Reviews</Title>
          <Button type="primary" onClick={() => setReviewFormVisible(true)}>
            Write a Review
          </Button>
          {reviewFormVisible && (
            <Form
              onFinish={handleReviewSubmit}
              style={{ marginTop: "16px" }}
              initialValues={{ rating: 5 }} // You can set the default rating here
            >
              <Form.Item
                name="name"
                label="Your Name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="Your Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rating"
                label="Rating"
                rules={[{ required: true, message: "Please give a rating" }]}
              >
                <Rate allowHalf />
              </Form.Item>
              <Form.Item
                name="comment"
                label="Your Review"
                rules={[
                  { required: true, message: "Please write your review" },
                ]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit Review
                </Button>
              </Form.Item>
            </Form>
          )}
          <List
            itemLayout="horizontal"
            dataSource={reviews}
            renderItem={(review) => (
              <List.Item>
                <List.Item.Meta
                  title={review.reviewer_name}
                  description={
                    <>
                      <Rate disabled value={review.reviewer_rating} allowHalf />
                      <p>{review.reviewer_comment}</p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/products/all`);
  const newses = await res.json();
  console.log(newses);
  const paths = newses?.data?.map((news) => ({
    params: { id: news.product_id.toString() },
  }));
  return { paths, fallback: true };
};
export const getStaticProps = async (context) => {
  try {
    const { params } = context;
    const res = await fetch(
      `${process.env.SERVER_URL}/api/products/single?product_id=${parseInt(
        params.id
      )}`
    );
    const data = await res.json();
    console.log(data);

    if (!data || !data.data || data.data.length === 0) {
      // If data is not available or empty, return an empty object
      return {
        props: { product: {} },
      };
    }

    // Ensure that the 'featured' prop is always an object, even if the data is available
    return {
      props: { product: data.data || {} },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: { product: {} },
    };
  }
};

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(
//     `${process.env.SERVER_URL}/api/products/single?product_name=${params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: { featured: data?.data },
//   };
// };

ProductDetailPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>Category List</title>
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
