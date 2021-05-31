import React, {useState, useEffect} from 'react';
import axios from "axios";

import Articles from '../components/Articles';
import CustomForm from "../components/Form";


function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8000/api/'
        axios.get(apiUrl)
            .then(response => {
                const allArticles = response.data;
                setArticles(allArticles);
                console.log(articles);
            });
    }, []);

    return (
        <>
            <Articles data={articles}/>
            <br/>
            <h2>Создать статью</h2>
            <CustomForm requestType="post" articleID={null} btnText="Добавить"/>
        </>
    )
}


export default ArticleList;