import React from 'react';
import Main from "../../pages/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import EventPage from "../../pages/EventPage/EventPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/event'}  element={<EventPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
