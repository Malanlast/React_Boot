import React from 'react'
import { IoMdContact } from "react-icons/io";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdate from './AddAndUpdate';
import UseDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

const ContactCards=({contact})=> {
const{isOpen,onClose,onOpen}=UseDisclouse();

const deleteContact= async(id)=>{
	try{
		await deleteDoc(doc(db,"contacts",id));
    toast.success("Content Deleted Successfully");
	}catch(error){
		console.lof(error);
	}
}
	return (
		<>
			<div key={contact.id} className=" flex-wrap rounded-lg p-2 items-center bg-yellow-100 flex justify-between">
    <div className="flex gap-1">
    <IoMdContact className="text-4xl text-orange-400"/>
    <div className=" ">
      <h2 className="text-medium">{contact.name}</h2>
      <p className=" text-sm">{contact.email}</p>
    </div>
    </div>
    <div className="flex text-3xl">
      <BiSolidMessageSquareEdit onClick={onOpen} className='cursor-pointer'/>
      <AiFillDelete onClick={()=>deleteContact(contact.id)}className=" cursor-pointer text-orange-500"/>
    </div>
    </div>
     <AddAndUpdate contact={contact} isUpdate onClose={onClose} isOpen={isOpen}/>
		</>
	)
}

export default ContactCards
