import axios from "axios";

const ncNewsApi = axios.create({ baseURL: 'https://nc-news-1fcj.onrender.com/api' });

export const getArticles = () => {
    return ncNewsApi.get('/articles')
    .then(({ data: { articles } }) => {
        return articles;
    });
}