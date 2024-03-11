import axios from "axios";

const ncNewsApi = axios.create({ baseURL: 'https://nc-news-1fcj.onrender.com/api' });

export const getArticles = () => {
    return ncNewsApi.get('/articles')
    .then(({ data: { articles }}) => {
        return articles;
    });
}

export const getArticle = (id) => {
    return ncNewsApi.get(`/articles/${id}`)
    .then(({ data: { article }}) => {
        return article;
    });
}

export const getArticleComments = (articleId) => {
    return ncNewsApi.get(`/articles/${articleId}/comments`)
    .then(({ data: { comments }}) => {
        return comments;
    });
}

export const patchArticleVotes = (articleId, voteInc) => {
    return ncNewsApi.patch(`/articles/${articleId}`, { inc_votes: voteInc })
    .then(({ data: { article }}) => {
        return article;
    });
}

export const postNewComment = (articleId, username, body) => {
    return ncNewsApi.post(`/articles/${articleId}/comments`, { username: username, body: body})
    .then(({ data: { comment }}) => {
        return comment;
    });
}