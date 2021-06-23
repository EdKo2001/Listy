import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import Styles from "./globalStyles";
import i18n from "./translation";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Container from "./common/Container";

const App = () => (
    <Router>
        <I18nextProvider i18n={i18n}>
            <Styles />
            <Header />
            <Container>
                <Switch>
                    <Route path={'/'} component={Home} exact />
                    <Route path={'/about'} component={About} />
                    <Route path={'/blog'} component={Blog} />
                    <Route path={'/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch> 
            </Container>
            <Footer />
        </I18nextProvider>
    </Router>
);

export default App;
