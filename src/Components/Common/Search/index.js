import React from 'react';
import {ReactComponent as SearchSvg} from '../../../assets/svg/search.svg';

const SearchForm = (props) => {

  return (  <form className="search-form" method="GET" >
  <div className="search-form position-relative">

    <input
      type="text"
      name="search"
      id="search"
      placeholder="     Search"
    />
   <SearchSvg className="position-absolute start-0 mt-2 ms-1"/>
  </div>
</form>)

}

export default SearchForm;
