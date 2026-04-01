import {useState} from "react"

function Contact () {
    const [email,setEmail]=useState("");
    const [subject,setSubject]=useState("");
    const [message,setMessage]=useState("");

    function handleSubmit(){
        e.preventDefault();


        console.log(email);
        console.log(subject);
        console.log(message);
    }

    return (
        <div>
            <form>
                <br />
                <label>Email</label>
                <input 
                    type="email"
                    placeholder="you@gmail.com"
                 />
                 <br />
                 <label>Subject</label>
                <input 
                    type="text"
                    placeholder="Enter subject"
                 />
                 <br />
                 <label>Message</label>
                <textarea
                    rows="5"
                    placeholder="Enter message"
                 />
                 <br />
                 <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;