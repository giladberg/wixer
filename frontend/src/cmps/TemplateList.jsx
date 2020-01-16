import TemplatePreview from "./TemplatePreview.jsx";
import React from 'react';

export default function TemplateList(props) {
    return <ul className='templates-container'>
        <li className='template-img-container' onClick={props.blankTemplate}><img src={require(`../assets/images/demi-data-templates/1.jpg`)} /></li>
        {props.templates.map((template, i) =>
         <TemplatePreview key={i} template={template}></TemplatePreview>)}
         </ul>
}