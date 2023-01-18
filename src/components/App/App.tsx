import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "../../pages/Main/Main";
import SinglePage from "../../pages/SinglePage/SinglePage";
import {store} from "../../redux/store";
import {THEME} from '../../constants'

function App() {
    return (
        <ThemeProvider theme={THEME}>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<Main/>}/>
                        <Route path={'/event/:id'} element={<SinglePage/>}/>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
