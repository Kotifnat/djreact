import React from 'react';
import {Form, Input, Button} from 'antd';

import axios from 'axios';

const CustomForm = (props) => {
    const [form] = Form.useForm();
    const handleSubmit = (event, requestType, articleID) => {
        form.setFieldsValue({
            title: '',
            content: ''
        })
        switch (requestType) {
            case 'post':
                props.addArticle(event)
            case 'put':
                props.updateArticle(event)
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
                    <Input placeholder="Введите название"/>
                </Form.Item>
                <Form.Item name="content" label="Содержание">
                    <Input placeholder="Введите содержание"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{props.btnText}</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CustomForm;