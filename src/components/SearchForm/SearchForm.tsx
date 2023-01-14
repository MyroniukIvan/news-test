import React, {useState} from 'react';
import './SearchForm.scss';
import SearchIcon from '@mui/icons-material/Search';

const SearchPanel = () => {
    const [term, setTerm] = useState();

    const onUpdateSearch = (e: { target: { value: any; }; }) => {
        const term = e.target.value;
        setTerm(term)
    };

    return (
        <div className={'search_form-block'}>
            <p>Filter by keywords</p>
            <SearchIcon className={'search_icon'}/>
            <input
                maxLength={50}
                className={'search_form'}
                type={'text'}
                placeholder={'Search for the available news & blogs!'}
                value={term}
                onChange={(e) => onUpdateSearch(e)}/>
            <div className={'search_form-results'}>
                <p>Results: 6</p>
            </div>
        </div>)

}

export default SearchPanel;