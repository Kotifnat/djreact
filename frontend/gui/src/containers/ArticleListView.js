import React, {useState, useEffect} from 'react';
import axios from "axios";

import Articles from '../components/Articles';


function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8000/api/'
        axios.get(apiUrl)
            .then(response => {
                const allArticles = response.data;
                setArticles(allArticles);
            });
    }, [setArticles]);

    return (
        <Articles data={articles}/>
    )
}


export default ArticleList;