import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const gridStyle = {
  maxWidth: '250px',
  textAlign: 'center',
  minWidth:"200px"
};


const FeaturedCategory = () => {
  return (
      <div class="m-home m-cat">
        <div
          style={{
            fontFamily: "Trebuchet MS ,sans-serif",
            lineHeight: 1.15,
            webkitTextSizeAdjust: "100%",
            webkitTapHighlightColor: "transparent",
            fontSize: "14px",
            boxSizing: "borderBox",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            margin: " 0 ",
          }}
          class="cat-items-wrap"
        >
         
  <Card title="Featured Category" subtitle="fidgj">
    <Card.Grid style={gridStyle}> <div
            style={{
              margin: 0,
              padding: "0 5px",
              marginBottom: "20px",
              textAlign: "center",
              flex: "0 0 16.66%",
            }}
            class="cat-item"
          >
            <a href="https://www.startech.com.bd/drone" class="cat-item-inner">
              <span class="cat-icon">
                <img
                  src="https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png"
                  alt="Drone"
                  width="48"
                  height="48"
                />
              </span>
              <p>Drone</p>
            </a>
          </div></Card.Grid>
    <Card.Grid style={gridStyle}> <div
            style={{
              margin: 0,
              padding: "0 5px",
              marginBottom: "20px",
              textAlign: "center",
              flex: "0 0 16.66%",
            }}
            class="cat-item"
          >
            <a href="https://www.startech.com.bd/drone" class="cat-item-inner">
              <span class="cat-icon">
                <img
                  src="https://www.startech.com.bd/image/cache/catalog/category-thumb/drone-48x48.png"
                  alt="Drone"
                  width="48"
                  height="48"
                />
              </span>
              <p>Drone</p>
            </a>
          </div></Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>
      Content
    </Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
    <Card.Grid style={gridStyle}>Content</Card.Grid>
  </Card>

         

    </div>
    </div>
  );
};

export default FeaturedCategory;
