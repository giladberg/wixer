import { Link } from 'react-router-dom';
import React from 'react';

export default function TemplatePreview(props) {

    return <li className='template-img-container'>
        <Link to={`/page/edit`}>
            <img src={require(`../assets/images/demi-data-templates/${props.template}.jpg`)} />
        </Link>
    </li >
}
