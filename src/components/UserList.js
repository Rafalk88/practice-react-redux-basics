import React from 'react';
import { connect } from 'react-redux';

import UserItem from './UserItem';
import { addUserAction } from '../actions/user'

class UserList extends React.Component {
    state = {
        userName: '',
    }
    handleSubmit = e => {
        e.preventDefault();
        const { userName } = this.state;
        const { users, addUser } = this.props;
        const ids = users.map(user => user.id);
        addUser({
            name: userName,
            id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
        });
        this.setState({
            userName: '',
        })
    }
    handleOnChange = e => {
        this.setState({
            userName: e.target.value
        })
    }
    render() {
        const { users } = this.props;
        const { userName } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            value={userName}
                            onChange={this.handleOnChange}
                        />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>
                <ul>
                    {
                        (users.length !== 0) ? (
                            users.map(({ name, id }) => (
                                <UserItem
                                    name={name}
                                    id={id}
                                />
                            ))
                        ) : (
                            <UserItem />
                        )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapActionToProps = {
    addUser: addUserAction,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);