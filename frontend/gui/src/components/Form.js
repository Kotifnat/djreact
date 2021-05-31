import React from 'react';
import {Form, Input, Button} from 'antd';

import axios from 'axios';

const CustomForm = (props) => {
    const [form] = Form.useForm();
    const handleSubmit = (event, requestType, articleID) => {
        const title = event.title;
        const content = event.content;
        switch (requestType) {
            case 'post':
                window.location.reload();
                return axios.post('http://localhost:8000/api/', {
                    title,
                    content
                })
                    .then(response => console.log(response))
                    .catch(error => console.error(error))
            case 'put':
                window.location.reload();
                return axios.put(`http://localhost:8000/api/${articleID}/`, {
                    title,
                    content
                })
                    .then(response => console.log(response))
                    .catch(error => console.error(error))
        }
    }

    return (
        <>
            <Form
                layout="vertical"
                form={form}
                onFinish={(event) => handleSubmit(
                    event,
                    props.requestType,
                    props.articleID)}
            >
                <Form.Item name="title" label="Название">
                    <Input name="title" placeholder="Введите название"/>
                </Form.Item>
                <Form.Item name="content" label="Содержание">
                    <Input name="content" placeholder="Введите содержание"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{props.btnText}</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CustomForm;