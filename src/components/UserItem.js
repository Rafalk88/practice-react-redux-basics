import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { deleteUserAction } from '../actions/user'

const UserItem = ({name = 'Default Name', id = -1}) => {
    const users = useSelector(({ users = [] }) => users)
    const dispatch = useDispatch()
    return (
        <li>
            {name}
            <button
                onClick={() => dispatch(deleteUserAction(id))}
                disabled={users.length === 0}
            >
                usuń
            </button>
        </li>
    )
}

export default UserItem;