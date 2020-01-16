import TemplatePreview from "./TemplatePreview.jsx";
import React from 'react';

export default function TemplateList(props) {
    return <ul className='templates-container'>
        <li className='template-img-container template-blank-container' onClick={props.blankTemplate}>
            Make your own template
        </li>
        {props.templates.map((template, i) =>
         <TemplatePreview key={i} template={template}></TemplatePreview>)}
         </ul>
}