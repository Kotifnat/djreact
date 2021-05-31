import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom"
import axios from "axios";
import {Card} from 'antd';


function ArticleDetail(props) {
    const [article, setArticle] = useState({});
    let match = useParams();

    useEffect(() => {
        const apiUrl = `http://localhost:8000/api/${match['articleID']}`;
        axios.get(apiUrl)
            .then(response => {
                const article = response.data;
                setArticle(article);
            });
    }, [setArticle]);

    return (
        <Card title={article.title}>
            <p>{article.content}</p>
        </Card>
    )
}


export default ArticleDetail;