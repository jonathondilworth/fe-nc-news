import React, { useState } from 'react';
// TODO: have a go at getting searchParams to work appropriately
import { useSearchParams } from 'react-router-dom';

const Filters = ({ setFilters }) => {

    const [topicSelectInput, setTopicSelectInput] = useState(null);
    const [sortBySelectInput, setSortBySelectInput] = useState(null);
    const [orderBySelectInput, setOrderBySelectInput] = useState(null);

    const changeTopicSelectInput = (event) => {
        setTopicSelectInput(event.target.value || null);
    }

    const changeSortBySelectInput = (event) => {
        setSortBySelectInput(event.target.value || null);
    }

    const changeOrderBySelectInput = (event) => {
        setOrderBySelectInput(event.target.value || null);
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
        <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
            <label htmlFor='topic-select' className="inline-block text-sm font-medium leading-6 text-gray-900">Topic:
            <select 
                id="topic-select" 
                name="topic" 
                onChange={changeTopicSelectInput}
                className="mt-2 inline-block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="">All</option>
                <option value="coding">Coding</option>
                <option value="football">Football</option>
                <option value="cooking">Cooking</option>
            </select>
            </label>
            <label htmlFor='sort-by' className="inline-block text-sm font-medium leading-6 text-gray-900">Sort By:
            <select 
                id="sort-by" 
                name="sortby" 
                onChange={changeSortBySelectInput}
                className="mt-2 inline-block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
                <option value="">No Sorting</option>
                <option value="title">Title</option>
                <option value="topic">Topic</option>
                <option value="author">Author</option>
                <option value="votes">Votes</option>
                <option value="created_at">Date</option>
            </select>
            </label>
            <label htmlFor='order-by' className="inline-block text-sm font-medium leading-6 text-gray-900">Order By:
            <select 
                id="order-by" 
                name="orderby" 
                onChange={changeOrderBySelectInput}
                className="mt-2 inline-block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"    
            >
                <option value="">No Order</option>
                <option value="asc">ASC</option>
                <option value="desc">DESC</option>
            </select>
            </label>

            <button
            type="submit"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >Filter!</button>

        </form>
    );

    // return (
    //     <form onSubmit={handleSubmit} style={{textAlign: 'center'}}>
    //         <label htmlFor='topic-select'>Topic:
    //         <select id="topic-select" name="topic" onChange={changeTopicSelectInput}>
    //             <option value="">All</option>
    //             <option value="coding">Coding</option>
    //             <option value="football">Football</option>
    //             <option value="cooking">Cooking</option>
    //         </select>
    //         </label>
    //         <label htmlFor='sort-by'>Sort By:
    //         <select id="sort-by" name="sortby" onChange={changeSortBySelectInput}>
    //             <option value="">No Sorting</option>
    //             <option value="title">Title</option>
    //             <option value="topic">Topic</option>
    //             <option value="author">Author</option>
    //             <option value="votes">Votes</option>
    //             <option value="created_at">Date</option>
    //         </select>
    //         </label>
    //         <label htmlFor='order-by'>Order By:
    //         <select id="order-by" name="orderby" onChange={changeOrderBySelectInput}>
    //             <option value="">No Order</option>
    //             <option value="asc">ASC</option>
    //             <option value="desc">DESC</option>
    //         </select>
    //         </label>
    //         <button type='submit'>Filter!</button>
    //     </form>
    // );
};

export default Filters;