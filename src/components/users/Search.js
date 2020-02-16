import React, {useContext, useState} from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
// import PropTypes from "prop-types"

const Search = () => {

    let githubContext = useContext(GithubContext);
    let alertContext = useContext(AlertContext);
    let {clearUsers, users, searchUsers} = githubContext;

    const [text, setText] = useState('');


    let onChange = (e) => setText(e.target.value);

    let onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
            alertContext.setAlert({type: "light", msg: "please input something"});
            return;
        }
        searchUsers(text);
        setText("");
    };

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='Search Users...'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {users.length > 0 && (
                <button
                    className='btn btn-light btn-block'
                    onClick={clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    )

};

export default Search;
