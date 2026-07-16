import Navbar from "./components/Navbar";
import { FaPlusCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "./config/firebase";
import ContactCards from "./components/ContactCards";
import Modal from "./components/Modal";
  import { ToastContainer} from 'react-toastify';
import AddAndUpdate from "./components/AddAndUpdate";
import UseDisclouse from "./hooks/useDisclouse";
import NotFoundComponents from "./components/NotFoundComponents";
export default function App() {
const[contacts ,setContacts]=useState([]);
 const{isOpen,onClose,onOpen}=UseDisclouse();

useEffect(()=>{
  const getContacts = async ()=>{
    try{
      const contactsRef=collection(db,"contacts");
      onSnapshot(contactsRef,(snapshot)=>{
       const contactsList=snapshot.docs.map((doc)=>{
      return{
        id:doc.id,
        ...doc.data()
      };
      });
       setContacts(contactsList);
       return contactsList;
    });
         

    }catch(error){
      console.log(error);
    }
  }
getContacts();
},[]);

const filterContacts=(e)=>{
  const value =e.target.value;
   const contactsRef=collection(db,"contacts");
      onSnapshot(contactsRef,(snapshot)=>{
       const contactsList=snapshot.docs.map((doc)=>{
      return{
        id:doc.id,
        ...doc.data()
      };  
      });
      const filteredContacts=contactsList.filter((contact)=>
      contact.name.toLowerCase().includes(value.toLowerCase())
      )

       setContacts(filteredContacts);
       return filteredContacts;
    });
        
}

  return (<> 
   <div className="max-w-[370px] mx-auto px-4">
<Navbar/>
<div className="flex gap-2">
<div className="flex relative items-center flex-grow">
   <BsSearch className="text-3xl ml-2 text-white absolute"/>
    <input type="text" onChange={filterContacts}
    className="h-10 pl-10 flex-grow rounded-md border border-white text-white bg-transparent"/>
   </div>
    <FaPlusCircle onClick={onOpen} className="text-5xl cursor-pointer text-white  "/>
   </div>
   <div className="mt-4 gap-3 flex flex-col ">
   {contacts.length <=0 ? (<NotFoundComponents/>) : (contacts.map((contact)=>(
     <ContactCards key={contact.id} contact={contact}/>
   ))
   )}
   </div>
   </div>
    <AddAndUpdate onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position="bottom-center"/>
   </>
  );
}