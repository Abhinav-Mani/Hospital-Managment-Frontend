import React, { useState } from 'react';
import SearchReasult from './SearchResult';
import SearchForm from './SearchForm';

const SearchPage = () => {
    const [loading,setLoading] =useState(false);
    const [result,setResult] =useState([]);
    return ( 
        <>
        <SearchForm setLoading={setLoading} setResult={setResult} loading={loading}/>
        <SearchReasult loading={loading} result={result}/>
        </>
     );
}
 
export default SearchPage;