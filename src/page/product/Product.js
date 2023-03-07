import { Col, Row, Space, Table, Button, message, Popconfirm } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delete1, edit } from "../../featre/productSlice";
import { ProductApi } from "../../API/PRODUCTApi/ProductApi";
import "/Users/Admin/Desktop/workspace/vti/react vti/redux-toolkit/src/App.css";
const { Column } = Table;
const Product = () => {
  const [delete1, setDelete1] = useState(false);
  useEffect(() => {
    getAll();
  }, [delete1]);
  const dispatch = useDispatch;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getAll = async () => {
    let res = await ProductApi.getAll();
    setData(res);
    console.log(res);
  };
  const text = "Are you sure to delete this task?";
  const description = "Delete the task";
  return (
    <>
      <Row justify="end">
        <Col span={3.5}>
          <Button
            type="primary"
            onClick={() => {
              navigate("/add-product");
            }}
          >
            ADD PRODUCT
          </Button>
        </Col>
      </Row>
      <Table dataSource={data} rowKey={(data) => data.id}>
        <Column title="id" dataIndex="id" key="id" className="id" />
        <Column title="image" dataIndex="image" key="image" className="image" />
        <Column title="name" dataIndex="name" key="name" className="name" />
        <Column title="price" dataIndex="price" key="price" className="price" />
        <Column
          title="quality"
          dataIndex="quanlity"
          key="quanlity"
          className="quality"
        />
        <Column
          title="description"
          dataIndex="description"
          key="description"
          className="description"
        />
        <Column
          className="Action"
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button
                type="primary"
                onClick={() => navigate(`/add-product/${record.id}`)}
              >
                EDIT
              </Button>
              <Popconfirm
                placement="top"
                title={text}
                description={description}
                onConfirm={() => {
                  ProductApi.deleteProduct(record.id);
                  setDelete1(!delete1);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary">DELETE</Button>
              </Popconfirm>
            </Space>
          )}
        />
      </Table>
    </>
  );
};
export default Product;
