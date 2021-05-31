import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom"
import axios from "axios";
import {Card, Button} from 'antd';
import CustomForm from '../components/Form';


function ArticleDetail(props) {
    const [article, setArticle] = useState({});
    let match = useParams();
    const apiUrl = `http://localhost:8000/api/${match['articleID']}`;

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                const article = response.data;
                setArticle(article);
            });
    }, [setArticle]);

    const handleDelete = (event) => {
        axios.delete(apiUrl);
        props.history.push('/');
    }

    return (
        <>
            <Card title={article.title}>
                <p>{article.content}</p>
            </Card>
            <h2>Изменить статью</h2>
            <CustomForm requestType='put' articleID={match['articleID']} btnText='Обновить'/>
            <form onSubmit={handleDelete}>
                <Button type="danger" htmlType="submit">Удалить</Button>
            </form>
        </>
    )
}


export default ArticleDetail;