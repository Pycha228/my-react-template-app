import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript 2', body: 'Description' },
        { id: 3, title: 'JavaScript 3', body: 'Description' },
    ]);

    const [title, setTitle] = useState('');
    const addNewPost = (e) => {
        e.preventDefault();
        console.log(title);
    };

    return (
        <div className='App'>
            <form>
                <MyInput
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type='text'
                    placeholder='Название поста'
                />
                <MyInput type='text' placeholder='Описание поста' />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'Посты про JS'} />
        </div>
    );
}

export default App;
