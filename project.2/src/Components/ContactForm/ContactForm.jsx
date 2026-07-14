import React ,{useState} from 'react'
import Buttons from '../Button/Buttons'
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import styles from "./Contact.module.css";
const ContactForm=()=> {
	const[formData ,setData]=useState({
         name:'',
		 email:''
	}
)
const handleChange=(event)=>{
	const{name,value,type,checked}=event.target;
    const fieldValue=type==='checkbox'?checked:value;
	console.log(name,fieldValue)
	setData({
		...formData,
		[name]:fieldValue
	})
}
const handleSubmit=(event)=>{
	event.preventDefault();
	console.log("Form Data",formData);
}
	return (
		 <section className={styles.container}>
		<div className={styles.contact_form}>
		<div className={styles.top_btn2}> 
		<div className={styles.top_btn}>
			<Buttons text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}
			/>
			<Buttons text="VIA CALL" icon={<MdCall fontSize="24px" />} />
			
		</div>
		   <Buttons
				  isOutline={true}
				  text="VIA EMAIL FORM"
				  icon={<MdMail fontSize="24px" />}
				/>
				</div>
				<form onSubmit={handleSubmit} >
					<div className={styles.form_control}>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' value={formData.name} onChange={handleChange}/>
					</div>
					<div  className={styles.form_control}>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email'value={formData.email} onChange={handleChange}/>
					</div>
					<div id="text" className={styles.form_control}>
					<label htmlFor='text'>Text</label>
					<input type='text' rows='7' style={{ height: '100px' }}/>
					</div>
					<div style={{display:'flex' , justifyContent:'end' }}>
						<button >SUBMIT</button>
					</div>
				</form>
				</div>
				<div className={styles.content_images}>
					<img src="/images/Service.png" alt='service photo' style={{ height: '530px', width:'622px',filter: "drop-shadow( 10px 1px 3px  #0000004D)"}} />
				</div>
				</section>
	)
}

export default ContactForm
