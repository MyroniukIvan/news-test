import React from 'react';
import Main from "../../pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SinglePage from "../../pages/SinglePage/SinglePage";
import {Provider} from "react-redux";
import store from "../redux/store";
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/event/:id'} element={<SinglePage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
