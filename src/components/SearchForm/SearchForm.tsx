import React from 'react';
import './SearchForm.scss';
import SearchIcon from '@mui/icons-material/Search';

const SearchPanel = ({value, onChange, resultsCount}: { value: any, onChange: any, resultsCount: number }) => {


    return (
        <div className={'search_form-block'}>
            <p>Filter by keywords</p>
            <SearchIcon className={'search_icon'}/>
            <input
                maxLength={50}
                className={'search_form'}
                type={'text'}
                placeholder={'Search for the available news!'}
                value={value}
                onChange={onChange}/>
            <div className={'search_form-results'}>
                <p>Results: {resultsCount}</p>
            </div>
        </div>)

}

export default SearchPanel;