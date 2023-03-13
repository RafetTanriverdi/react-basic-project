import React, { useState,useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { Button, Col, Input, Row } from 'antd';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
}).required();

function Update() {
  const [categoryUpdate, setcategoryUpdate] = useState({});
  const [loading, setloading] = useState(true);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");

  let { id } = useParams();

  useEffect(() => {


    axios.get('https://northwind.vercel.app/api/categories/' + id)
      .then(res => {
        setcategoryUpdate(res.data);
        setloading(false)
      })
  }, [])

  let navigate = useNavigate();
  const { control, handleSubmit,  formState:{ errors }  } = useForm({
    values: {
      name: categoryUpdate.name,
      description: categoryUpdate.description,
    },
    resolver: yupResolver(schema)
  });



  const updateCategory = (values) => {

    axios.patch(`https://northwind.vercel.app/api/categories/${id}`, values)
      .then(res => {
        navigate('/categories')
      })

  }


  return (<>
    <form onSubmit={handleSubmit(updateCategory)}>

      <Row style={{ marginTop: 20 }}>
        <Col span={12}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input placeholder='Name' {...field}  />}
          />
          <p style={{ color: 'red' }}>{errors.name?.message}</p>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={12}>
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextArea rows={4} placeholder='Description' {...field} />}
          />
          <p style={{ color: 'red' }}>{errors.description?.message}</p>

        </Col>
      </Row>


      <Button style={{ marginTop: 20 }} type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  </>
  )
}

export default Update;