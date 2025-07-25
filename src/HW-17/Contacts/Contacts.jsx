import styled from "styled-components";
const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  list-style: none;
`;
const Button=styled.button`
  transition-duration: 0.3s;
  margin-left: 10px;
  &:hover{
    transition-duration: 0.5s;
    background: #a02c2c;
    color: white;
    border: none;
  }
`
const Contacts = ({deleteContact,userInfo}) => {
    const contactId=(event)=>{
        deleteContact(event.target.id)
    }
    return (
        <>
            <List>
                {userInfo.map((user) => (
                    <li id={user.id}>
                        {user.name} : {user.telephone}
                        <Button id={user.id} onClick={contactId}>
                            Delete
                        </Button>
                    </li>
                ))}
            </List>
        </>
    );
};

export default Contacts