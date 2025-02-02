import {
  ShoppingCartOutlined,
  AppstoreAddOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { Button, notification } from "antd";
import { Image } from "antd";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "@/styles/Cart.module.css"; // Adjust the path to your CSS file

const { Meta } = Card;
const cardsStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  alignItems: "flex-start", // Adjust alignment as needed
  margin: "0", // Adjust margin as needed
};

const cardItemStyle = {
  flex: "0 0 calc(33.333% - 20px)", // Adjust the width of each card
  margin: "10px",
};

const FeaturedCategory = ({ featured }) => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState({});
  const [buildItems, setBuildItems] = useState({});
  const [api, contextHolder] = notification.useNotification();
  console.log(featured);

  // Load cart items from local storage on component mount
  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart")) || {};
    setCartItems(cartFromStorage);
  }, []);
  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("build")) || {};
    setBuildItems(cartFromStorage);
  }, []);

  const handleCart = (item) => {
    const { product_id: itemId, product_name: itemName } = item;

    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || {};

    // Clone the existing cart items
    const newCartItems = { ...existingCartItems };

    // Check if the item is already in the cart
    if (newCartItems[itemId]) {
      // If the item is already in the cart, show an alert
      api["warning"]({
        message: "ALert!",
        description: `${itemName} is already in the cart.`,
        duration: 3,
      });
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      newCartItems[itemId] = 1;

      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(newCartItems));

      // Show a success message
      api["success"]({
        message: "Success!",
        description: `Added ${itemName} to the cart.`,
        duration: 3,
      });
    }

    // Update the state with the new cart items
    setCartItems(newCartItems);
  };

  const handleBuild = (item) => {
    const { product_category: itemId, product_id: itemName } = item;

    // Retrieve existing cart items from local storage
    const existingCartItems = JSON.parse(localStorage.getItem("build")) || {};

    // Clone the existing cart items
    const newCartItems = { ...existingCartItems };
    // If the item is not in the cart, add it with a quantity of 1
    newCartItems[itemId] = JSON.stringify(item);

    // Update local storage with the new cart items
    localStorage.setItem("build", JSON.stringify(newCartItems));

    // Show a success message
    api["success"]({
      message: "Success!",
      description: `Added ${itemId} (id:${itemName}) for build.`,
      duration: 3,
    });
    router.push(`/build`);
    setBuildItems(newCartItems);
  };

  return (
    <div>
      {contextHolder}
      <div style={cardsStyle}>
        {featured?.map((item) => (
          <Card
            key={item._id}
            style={cardItemStyle}
            bodyStyle={{
              height: "120px",
              maxWidth: "350px",
              minWidth: "300px",
            }} // Set a fixed height for each card
            cover={
              <Image
                src={item?.product_image}
                alt={item?.product_name}
                fallback="data:image/png;base64,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"
                height={200}
                style={{
                  objectFit: "cover",
                }}
              />
            }
            actions={[
              <span onClick={() => router.push(`/checkout/${item?.product_id}`)}
                title="order now"
                key="setting">
                <CreditCardOutlined  /> BUY
              </span>,
              <span 
                onClick={() => handleCart(item)}
                title="add to cart"
                key="edit"
                className={
                  cartItems[item.product_id]
                    ? styles["added-to-cart-icon"]
                    : styles["add-to-cart-icon"]
                }
             >
                <ShoppingCartOutlined /> CART
              </span>,
              <span 
                onClick={() => handleBuild(item)}
                title="build pc"
                key="ellipsis"
             >
                <AppstoreAddOutlined /> BUILD
              </span>,
            ]}
          >
            <Meta
              avatar={
                <Avatar
                  onClick={() => router.push(`/category/${item?.category_id}`)}
                  src={item?.category_image}
                />
              }
              title={
                <Link href={`/product/${item?.product_id}`}>
                  {item?.product_name}
                </Link>
              }
              description={
                <div>
                  <h5>{`Price: ${item?.product_price}$`}</h5>
                  <p
                    style={{ marginTop: "-20px" }}
                  >{`Status: ${item?.product_status}    ⭐${item?.rating}`}</p>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategory;
