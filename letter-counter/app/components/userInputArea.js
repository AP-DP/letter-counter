'use client'

// React Elements
import React from 'react';
import { useState, useEffect } from 'react';
import { FormGroup } from 'react-bootstrap';
// Bootstrap Elements
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// CSS
import styles from "../styles/input.module.css";

function UserInputArea({exportInput}) {
    const [toggleDisabled, setToggleDisabled] = useState(false);
    const [userInput, setUserInput] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        // Prevent typing during submission process
        setToggleDisabled(true);
        // Use data from user
        exportInput(userInput);
    }

    const resetInput = () => {
        setToggleDisabled(false);
        let resetString = "";
        setUserInput(resetString);
        exportInput(resetString);
    }

    // Addresses issue where textarea does not process pasted text if identical to previous text
    useEffect(() => {
        window.addEventListener("paste", (event) => {
            setTimeout(() => {
                let textAreaContent = (event.target.value);
                try {
                    setUserInput(textAreaContent);
                } catch (error) {
                    alert("Please refresh the page and paste again.");
                }
            }, 2)
        });
    });

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