import { Button, Card, Col, Pagination, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { ProductApi } from "../../API/PRODUCTApi/ProductApi";
import { useDispatch } from "react-redux";
import { buyProduct } from "../../featre/cartSilce";
const ListProduct = ({ children }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    onPageChange();
  }, []);
  const onPageChange = async (pageNumber) => {
    try {
      let res = await ProductApi.getByPage(pageNumber);
      setData(res);
    } catch (error) {}
  };
  return (
    <>
      <Row>
        {data.map((item) => (
          <Col span={6} key={item.id}>
            <Card
              hoverable
              style={{
                marginLeft: 15,
                width: 300,
                marginTop: "30px",
              }}
              cover={<img alt="example" src={item.image} />}
            >
              <b>{`${item.price}.000 VND`}</b>
              <Meta title={item.name} description={item.description} />

              <Button
                style={{ marginTop: 15 }}
                onClick={() => {
                  dispatch(buyProduct(item));
                }}
              >
                mua hàng
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        defaultCurrent={1}
        total={Math.ceil((children.length / 8) * 10)}
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 30 }}
        onChange={onPageChange}
      />
    </>
  );
};

export default ListProduct;
