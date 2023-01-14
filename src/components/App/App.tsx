import React from 'react';
import Main from "../../pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EventPage from "../../pages/EventPage/EventPage";
import {Provider} from "react-redux";
import store from "../redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/event'} element={<EventPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
