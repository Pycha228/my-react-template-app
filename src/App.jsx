import React, { useState } from 'react';
import './styles/App.css';
import PostItem from './components/PostItem';

function App() {
    const [value, setValue] = useState('Текст в инпуте');

    return (
        <div className='App'>
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
}

export default App;
