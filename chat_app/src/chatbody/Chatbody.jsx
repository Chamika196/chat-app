import React from 'react'
import "./Chatbody.css"
import Chatlist from '../chatlist/Chatlist'
import Chatc from '../chatcontent/Chatc'

const Chatbody = () => {
    return(
        <div className='main__chatbody'>
           <Chatlist/> 
            <Chatc/>
        </div>
    )

}

export default Chatbody;