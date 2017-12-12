import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./common/header";
import Footer from "./common/footer";
import Home from "./posts/home";
import Posts from "./posts/posts";
import Authors from "./authors/authors";
import SingleAuthor from "./authors/singleAuthor";
import About from "./about/about";
import CreateNewPost from "./posts/new/createNewPost";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/posts/:id" component={Posts} />
                    <Route path="/authors" component={Authors} />
                    <Route path="/author/:id" component={SingleAuthor} />
                    <Route path="/about" component={About} />
                    <Route path="/createNewPost" component={CreateNewPost} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default App;