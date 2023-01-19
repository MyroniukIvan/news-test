import React, {useEffect, useMemo, useState} from 'react';
import Fuse from "fuse.js";
import SearchForm from "../../components/SearchForm/SearchForm";
import Card from '../../components/Card/Card';
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {useGetArticlesQuery} from "../../redux/reducers/arcticles";
import './Main.scss'

type RangeTuple = [number, number]
export type FuseResultMatch = {
    indices: RangeTuple[]
    key?: string
    value?: string
}


const Main = () => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [matches, setMatches] = useState<FuseResultMatch[][]>([])
    const {data} = useGetArticlesQuery('');

    const fuse = useMemo(() => {
        return new Fuse(data, {
            keys: ['title', 'summary'],
            includeMatches: true,
            shouldSort: true,
            findAllMatches: true,
            ignoreLocation: true,
            isCaseSensitive: false,
            threshold: 0.2,
        })
    }, [data])

    useEffect(() => {
        if (data)
            setFilteredData(data);
    }, [data])

    useEffect(() => {
        if (data && search) {
            const searchResult = fuse.search(search)
            console.log(searchResult);
            setFilteredData(searchResult.map((el) => el.item))
            setMatches(searchResult.map((el) => el.matches as unknown as FuseResultMatch[]))
        } else if (data) {
            setFilteredData(data)
            setMatches([])
        }
    }, [search, data]);


    return (
        <>
            <div className={'main_container'}>
                <ErrorBoundary>
                    <SearchForm value={search}
                                onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearch(e.target.value)}
                                resultsCount={filteredData.length}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <div className={'card_container'}>
                        {filteredData?.map((el: { updatedAt: string; id: number; title: string; imageUrl: any; summary: string; }, i) => {
                            return (
                                <Card {...el} key={el.id} title={el.title} imageUrl={el.imageUrl}
                                      summary={el.summary}
                                      updatedAt={el.updatedAt}
                                      matches={matches[i]}
                                />
                            );
                        })}
                    </div>
                </ErrorBoundary>
            </div>
        </>
    );
};

export default Main;