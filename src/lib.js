import React from 'react';
import text from './titles.json';
//import './stylesheets/style2.scss'
//import './stylesheets/style.css'

export const hello = (
    <h1 id="title" className="greeting">
        {text.hello}
    </h1>
)

export const goodbye = (
    <h1 id="gbtitle" className="goodbye">    
        {text.goodBye}
    </h1>
)