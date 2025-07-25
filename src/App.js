import './App.css';
import Statistics from "./hw-16/Statistics/Statistics";
import Feedback from "./hw-16/FeedbackOptios/FeedbackOptions";
import {useContext, useRef} from "react";
import {ContextHW16} from "./hw-16/ContextHW16";
import NewContact from "./HW-17/NewContact/NewContact";
import Filter from "./HW-17/Filter/Filter";
import Contacts from "./HW-17/Contacts/Contacts";
import {ContextHW17} from "./HW-17/ContextHW17";
function App() {
    const { goodFeedback,neutralFeedback,badFeedback,good,neutral,bad,total,positivePercentage }=useContext(ContextHW16)
    const Arr=[{func:goodFeedback,name:"good"},{func:neutralFeedback,name:"neutral"},{func:badFeedback,name:"bad"}];
    const {setNewContact,filterValue,contacts,Delete}=useContext(ContextHW17);
    return (
        <div className="App">
            <div>
                <h1>Homework 16</h1>
                <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
                <h1>Please leave feedback</h1>
                {
                    Arr.map((item)=>{
                        return <Feedback name={item.func} options={item.name} key={item.name}/>
                    })
                }
            </div>
            <div>
                <h1>Homework 17</h1>
                <h2>Phonebook</h2>
                <NewContact newContact={setNewContact}/>
                <h2>Contacts</h2>
                <Filter filter={filterValue}/>
                <Contacts userInfo={contacts} deleteContact={Delete}/>
            </div>
        </div>
    )
}

export default App;
