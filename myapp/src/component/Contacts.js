import React from 'react'

export default function contactus(props) {
    console.log(props.contactDetails);
  return (
    <div>
        Name : {props.contactDetails.name} <br></br>
        Phone : {props.contactDetails.phone} <br></br>
        email : {props.contactDetails.email} <br></br>
        
    </div>
  )
}
