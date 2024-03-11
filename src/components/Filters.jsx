import React, { useState } from 'react';

const Filters = ({ setFilters }) => {

    const [topicSelectInput, setTopicSelectInput] = useState(null);
    const [sortBySelectInput, setSortBySelectInput] = useState(null);
    const [orderBySelectInput, setOrderBySelectInput] = useState(null);

    const changeTopicSelectInput = (event) => {
        setTopicSelectInput(event.target.value);
    }

    const changeSortBySelectInput = (event) => {
        setSortBySelectInput(event.target.value);
    }

    const changeOrderBySelectInput = (event) => {
        setOrderBySelectInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFilters({
            topic: topicSelectInput,
            sortBy: sortBySelectInput,
            orderBy: orderBySelectInput
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='topic-select'>Topic:
            <select id="topic-select" name="topic" onChange={changeTopicSelectInput}>
                <option value={null}>All</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
                <option value="cooking">Cooking</option>
            </select>
            </label>
            <label htmlFor='sort-by'>Sort By:
            <select id="sort-by" name="sortby" onChange={changeSortBySelectInput}>
                <option value={null}>No Sorting</option>
                <option value="title">Title</option>
                <option value="topic">Topic</option>
                <option value="author">Author</option>
                <option value="votes">Votes</option>
            </select>
            </label>
            <label htmlFor='order-by'>Order By:
            <select id="order-by" name="orderby" onChange={changeOrderBySelectInput}>
                <option value={null}>No Order</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            </label>
            <button type='submit'>Filter!</button>
        </form>
    );
};

export default Filters;