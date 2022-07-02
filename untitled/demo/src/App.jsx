import React from 'react';
import  {Posts} from './components/Posts';
import {Form} from "./components/Form";
import  {FormWithRef} from "./components/FormWithRef";
import  {UncontrolledForm} from "./components/UncontrolledForm";

export default class App extends React.Component {
    state = {
        posts: [
            { id: 'abc1', name: 'JS Basics' },
            { id: 'abc2', name: 'JS Advanced' },
            { id: 'abc3', name: 'Recat JS' },
        ],
    };

    removePost = (id) => {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== id),
        });
    };

    render() {
        const { posts } = this.state;

        return (
            <div className="App">
                <UncontrolledForm/>
                <FormWithRef/>
                <Form/>
                <Posts posts={posts} removePost={this.removePost} />
            </div>
        );
    }
}

