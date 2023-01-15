import React, {useEffect, useState} from 'react';
import './SearchForm.scss';
import SearchIcon from '@mui/icons-material/Search';
import card from '../../pages/Main/Main';

const SearchPanel = ({value, onChange}: { value: any, onChange: any }) => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        setCounter(0)
    }, [])


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
                <p>Results: {counter}</p>
            </div>
        </div>)

}

export default SearchPanel;