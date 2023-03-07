import { Button, Form, Input, message, Select } from "antd";
import { useDispatch } from "react-redux";
import { add } from "../../featre/productSlice";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as yup from "yup";
import React, { useEffect, useState } from "react";
import { ProductApi } from "../../API/PRODUCTApi/ProductApi";
const schema = yup
  .object({
    name: yup
      .string()
      .required("khong duoc bo trong ")
      .test("no-space", "khong duoc co khoang trang", (value) => {
        return !/\s/.test(value);
      }),
    price: yup.number().positive().integer("phai la so thuc").required("loi~"),
    quanlity: yup.number().positive().integer().required(),
    description: yup.string().required("khong duoc bo trong "),
    image: yup.string().required("khong duoc bo trong "),
  })
  .required();
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const AddProduct = () => {
  const location = useLocation();
  const [dataEdit, setDataEdit] = React.useState({
    name: "",
    price: 0,
    quanlity: 0,
    description: "",
    image: "",
  });
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      price: 0,
      quanlity: 0,
      description: "",
      image: "",
    },
    resolver: yupResolver(schema),
  });
  const [data, setData] = React.useState({});

  const params = useParams();
  const [text, setText] = useState("ADD PRODUCT");
  const [btn, setBtn] = React.useState("ADD");
  const ok = () => {
    if (params.id > 0) {
      setText("UPDATE PRODUCT");
      setBtn("UPDATE");
      const getById = async () => {
        let res = await ProductApi.getById(params.id);
        setValue("name", res.name);
        setValue("price", res.price);
        setValue("quanlity", res.quanlity);
        setValue("description", res.description);
        setValue("image", res.image);
      };
      getById();
    }
  };
  useEffect(() => {
    if (params.id) {
      ok();
    }
  }, []);
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Add Success ",
        duration: 2,
      });
    }, 1000);
  };

  const postProduct = async (value) => {
    try {
      let data = await ProductApi.AddProduct(value);
      reset();
      openMessage();
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    } catch (error) {
      const error1 = () => {
        messageApi.open({
          type: "error",
          content: "somethong went wrong",
        });
      };
      error1();
    }
  };

  const putProduct = async (value) => {
    try {
      let data = await ProductApi.updateProduct(params.id, value);
      reset();
      openMessage();
      setTimeout(() => {
        navigate("/product");
      }, 2000);
    } catch (error) {
      const error1 = () => {
        messageApi.open({
          type: "error",
          content: "somethong went wrong",
        });
      };
      error1();
    }
  };
  const navigate = useNavigate();
  const onSubmit = (values) => {
    if (params.id > 0) {
      putProduct(values);
    } else {
      postProduct(values);
    }
  };

  return (
    <>
      {contextHolder}
      <b>{text}</b>
      <br />
      <br />
      <Form
        name="control-hooks"
        onFinish={handleSubmit(onSubmit)}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="name"
          hasFeedback={errors.name?.message}
          validateStatus={errors.name?.message ? "error" : "success"}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
            defaultValue=""
          />
        </Form.Item>
        <Form.Item
          label="price"
          hasFeedback={errors.price?.message}
          validateStatus={errors.price?.message ? "error" : "success"}
          help={
            errors.price?.type === "typeError"
              ? "khong duoc bo trong"
              : errors.price?.message
          }
        >
          <Controller
            name="price"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
            defaultValue=""
          />
        </Form.Item>
        <Form.Item
          label="quanlity"
          hasFeedback={errors.quanlity?.message}
          validateStatus={errors.quanlity?.message ? "error" : "success"}
          help={
            errors.quanlity?.type === "typeError"
              ? "khong duoc bo trong"
              : errors.quanlity?.message
          }
        >
          <Controller
            name="quanlity"
            control={control}
            render={({ field }) => <Input type="number" {...field} />}
            defaultValue=""
          />
        </Form.Item>
        <Form.Item
          label="description"
          hasFeedback={errors.description?.message}
          validateStatus={errors.description?.message ? "error" : "success"}
          help={errors.description?.message}
        >
          <Controller
            name="description"
            rules={{ required: "khong duoc bo trong " }}
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
            defaultValue=""
          />
        </Form.Item>
        <Form.Item
          label="image"
          hasFeedback={errors.image?.message}
          validateStatus={errors.image?.message ? "error" : "success"}
          help={errors.image?.message}
        >
          <Controller
            name="image"
            rules={{ required: "khong duoc bo trong " }}
            control={control}
            render={({ field }) => <Input type="text" {...field} />}
            defaultValue=""
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            {btn}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default AddProduct;
