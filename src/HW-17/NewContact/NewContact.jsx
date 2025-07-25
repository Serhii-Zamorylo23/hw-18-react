import { useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
    width: 255px;
    border: 2px solid black;
    margin-left: 5px;
    padding-left: 5px;
    row-gap: 5px;
`;
const ButtonForm = styled.button`
    background: none;
    margin-bottom: 10px;
    margin-top: 10px;
    border: 2px solid gray;
    border-radius: 5px;
`;

const NewContact = ({ newContact }) => {
    const nameRef = useRef(null);

    const addNewContact = (event) => {
        event.preventDefault();
        let name = event.target.elements.username.value;
        let telephone = event.target.elements.number.value;
        newContact(name, telephone);

        event.target.reset();

        if (nameRef.current) {
            nameRef.current.focus();
        }
    };

    return (
        <Form onSubmit={addNewContact}>
            <p>Name</p>
            <input ref={nameRef} name="username" type="text" />
            <p>Number</p>
            <input
                type="tel"
                name="number"
                pattern="^\+[1-9][0-9]{7,14}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <ButtonForm>Add contact</ButtonForm>
        </Form>
    );
};

export default NewContact;
