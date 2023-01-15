import React, {useEffect, useState} from 'react';
import './Main.scss'
import SearchForm from "../../components/SearchForm/SearchForm";
import Card from '../../components/Card/Card';
import {useHttp} from "../../hooks/useHttp";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {FILTER_BY_SEARCH, selectFilteredBlogs} from "../../components/redux/slice/filterSlice";


const Main = () => {
    const [search, setSearch] = useState('');
    const [card, setCard] = useState<any>();
    const {request} = useHttp()

    useEffect(() => {
        request('https://api.spaceflightnewsapi.net/v3/articles')
            .then((response) => setCard(response))
    }, [request])


    return (
        <>
            <div className={'main_container'}>
                <ErrorBoundary>
                    <SearchForm value={search}
                                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearch(e.target.value)}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <div className={'card_container'}>
                        {card?.map((el: { updatedAt: string; id: number; title: string; imageUrl: any; summary: string; }) => {
                            return (
                                <Card {...el} key={el.id} title={el.title} imageUrl={el.imageUrl}
                                      summary={el.summary}
                                      updatedAt={el.updatedAt}/>
                            );
                        })}
                    </div>
                </ErrorBoundary>
            </div>
        </>
    );
};

export default Main;