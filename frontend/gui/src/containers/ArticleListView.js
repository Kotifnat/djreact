import React, {useState, useEffect} from 'react';
import axios from "axios";

import Articles from '../components/Articles';
import CustomForm from "../components/Form";


function ArticleList() {
    const [articles, setArticles] = useState([]);
    const apiUrl = 'http://localhost:8000/api/'
    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                const allArticles = response.data;
                setArticles(allArticles);
                console.log(articles);
            });
    }, [articles]);

    function addArticle(article) {
        setArticles(articles.concat({
            title: article.title,
            content: article.content
        }))
        axios.post(apiUrl, {
            title: article.title,
            content: article.content
        })
            .then(response => console.log(response))
            .catch(error => console.error(error))
    }

    return (
        <>
            <Articles data={articles}/>
            <br/>
            <h2>Создать статью</h2>
            <CustomForm addArticle={addArticle} requestType="post" articleID={null} btnText="Добавить"/>
        </>
    )
}


export default ArticleList;