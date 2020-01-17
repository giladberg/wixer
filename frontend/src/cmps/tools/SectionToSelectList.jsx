import React, { Component } from 'react'
// import DynamicCmp from '../DynamicCmp.jsx'
export default class SectionToSelectList extends Component {
    state={sections:['calendar','countdown','introduction']}
    render() {
        return (
            <div className="sectionToSelectList flex column align-center">
               
            </div>
        )
    }
}
// {this.state.sections.map((cmpName,index)=>{
//     return <div key={index} className="sectionToSelectPreview">
//         {/* <DynamicCmp cmpName={cmpName}/> */}
//         </div>
// })}