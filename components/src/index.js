import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Clock from './Clock';

const App = () => {
    return (
        <div>
            <Clock />
            <div className="ui container comments">
                <ApprovalCard>
                    <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice blogpost"
                    avatar={faker.image.avatar()}
                    />
                </  ApprovalCard>
                <CommentDetail 
                author="Alex"
                timeAgo="Today at 2:00PM" 
                content="I like the subject"
                avatar={faker.image.avatar()}
                />

            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));