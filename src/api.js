import axios from "axios";

const ncNewsApi = axios.create({ baseURL: 'https://nc-news-1fcj.onrender.com/api' });

export const getArticles = () => {
    return ncNewsApi.get('/articles')
    .then(({ data: { articles } }) => {
        return articles;
    });
}

export const getArticle = (id) => {
    return ncNewsApi.get(`/articles/${id}`)
    .then(({ data: { article }}) => {
        return article;
    });
}