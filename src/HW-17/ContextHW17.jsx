import {createContext, useEffect, useState} from "react";
import {nanoid} from "nanoid";
export const  ContextHW17=createContext(null)

export const ProviderHW17=({children})=>{
    const contactsItem=JSON.parse(localStorage.getItem("Contacts"))||[]
    const [contacts,setContacts]=useState(contactsItem)
    const [filter,setFilter]=useState('')
    const setNewContact=(name,telephone)=>{
        const isDuplicate = contacts.some((contact) => contact.name == name);
        if (isDuplicate) {
            alert("A contact with this name already exists!");
        }else{
            setContacts([...contacts,{id:nanoid(),name,telephone}])
        }
    }
    const Delete=(id)=>{
        setContacts(contacts.filter((contact)=>contact.id!==id))
    }
    const filterValue=(value)=>{
        setFilter(`${value}`)
        setContacts(contacts.filter((contact)=>contact.name.includes(filter.toLocaleLowerCase())))
    }
    useEffect(()=>{
        localStorage.setItem("Contacts",JSON.stringify(contacts))
    },[contacts])
    return(
        <ContextHW17.Provider value={{setNewContact,filterValue,contacts,Delete}}>
            {children}
        </ContextHW17.Provider>
    )
}