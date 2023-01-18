import React from 'react';
import './SearchForm.scss';
import {ReactComponent as SearchIcon} from '../../assets/search.svg';
import Typography from "@mui/material/Typography";

const SearchPanel = ({value, onChange, resultsCount}: { value: any, onChange: any, resultsCount: number }) => {


    return (
        <div className={'search_form-block'}>
            <Typography sx={{
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "20px",
                color: "#363636",
                paddingBottom: "10px",
            }}
            >Filter by keywords</Typography>
            <div className={'search_form-container'}>
                <SearchIcon className={'search_form-icon'}/>
                <input
                    maxLength={50}
                    className={'search_form'}
                    type={'text'}
                    placeholder={'Search for the available news!'}
                    value={value}
                    onChange={onChange}/>
            </div>
            <div className={'search_form-results'}>
                <Typography sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#363636",
                    paddingBottom: '5px',
                }}>Results: {resultsCount}</Typography>
            </div>
        </div>)

}

export default SearchPanel;