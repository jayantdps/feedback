import React,{useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
const [text, setText] = useState('')
const [btnDisabled, setBtnDisabled] = useState(true)
const [message, setMessage] = useState('')


// to get typed input
const handleTextChange = (e) => {
    setText(e.target.value);
}

    return (
        <Card>
            <form>
                <h2> How would you rate your service with us</h2>
                {/* todo */}
                <div className='input-group'>
                    {/* toget typed input */}
                    <input onChange={handleTextChange} type="text" placeholder= "Write a review "name="" id="" value={text} />
                    <button type="submit" isDisabled={ btnDisabled }>Send</button>
                    <Button />
                </div>
            </form>
        </Card>
    )
}

export default FeedbackForm
