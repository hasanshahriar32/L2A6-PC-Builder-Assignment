import React from "react";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const gridStyle = {
  maxWidth: "250px",
  textAlign: "center",
  minWidth: "200px",
};

const FeaturedCategory = ({ allCategory }) => {
  console.log(allCategory);
  return (
    <div className="m-home m-cat">
      <div className="cat-items-wrap">
        <Card title="Featured Category">
          {allCategory.map((item) => (
            <Card.Grid style={gridStyle} key={item._id}>
              <Link
                href={`/category/${item?.category_id}`}
                className="cat-item-inner"
              >
                <span className="cat-icon">
                  <Image
                    src={item?.category_image}
                    alt={item?.category_name}
                    width={48}
                    height={48}
                  />
                </span>
                <p>{item?.category_name}</p>
              </Link>
            </Card.Grid>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default FeaturedCategory;
