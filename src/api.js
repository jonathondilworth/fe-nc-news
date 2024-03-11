import axios from "axios";

const ncNewsApi = axios.create({ baseURL: 'https://nc-news-1fcj.onrender.com/api' });

export const getArticles = (topic, sortBy, orderBy) => {
    return ncNewsApi.get('/articles', { params: { topic: topic, sort_by: sortBy, order: orderBy }})
    .then(({ data: { articles } }) => {
        return articles;
    });
}