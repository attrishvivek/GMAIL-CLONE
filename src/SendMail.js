import React from 'react'
import "./SendMail.css"
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux";
import {closeSendMessage} from "./features/mailSlice"
import {db} from  "./firebase";
import firebase from "firebase";

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        db.collection('emails').add(
            {
            to: formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            
        });

        dispatch(closeSendMessage());
    };

    return (
        <div className="SendMail">
             <div className="SendMail_header">
       <h3> New Message</h3>
       <CloseIcon onClick={()=> dispatch(closeSendMessage())} 
       className="SendMail_close" />
             </div>


             <form onSubmit={handleSubmit(onSubmit)}>

            <input 
             name='to'
             placeholder='To'
              type="email" 
              ref={register({required: true})}
              />
     {errors.to && <p className="SendMail_error">To is 
     Required!</p>}

            <input name='subject' 
            placeholder='Subject'
             type="text"
             ref={register({required: true})}
            />
            {errors.subject  && ( <p className="SendMail_error">subject is 
     Required!</p>)}

            <input name='message'
             placeholder='Message..' 
             type="text"  
             className="SendMail_Message"
             ref={register({required: true})}
             />

{errors.message  && ( <p className="SendMail_error">message is 
     Required!</p>)}

            <div className="SendMail_options">
                <Button 
                className='SendMail_Send'
                variant="contained"
                color="primary"
                type="submit"
                 > Send</Button>

</div>
             </form>
        </div>
       
    );
}

export default SendMail;
