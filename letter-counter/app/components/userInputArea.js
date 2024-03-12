'use client'

// React Elements
import React from 'react';
import { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
// Bootstrap Elements
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// CSS
import styles from "../styles/input.module.css";
// Functionality
import { countLetters } from '../utils/counter';

function UserInputArea() {
    const [toggleDisabled, setToggleDisabled] = useState(false);
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Prevent typing during submission process
        setToggleDisabled(!toggleDisabled);
        // Use data from user
        let count = countLetters(userInput);
        console.log(count);
    }

    const resetInput = () => {
        setToggleDisabled(!toggleDisabled);
        setUserInput("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Form.Control as="textarea" rows={10} disabled={toggleDisabled} onChange={e => setUserInput(e.target.value)}/>
                <div className={styles.controls}>
                    <Button className="font-monospace" variant="outline-primary" type="submit">
                        Submit
                    </Button>
                    <Button className="font-monospace" variant="outline-primary" type="reset" onClick={resetInput}>
                        Reset
                    </Button>
                </div>
            </FormGroup>
        </Form>
    );
}

export default UserInputArea;