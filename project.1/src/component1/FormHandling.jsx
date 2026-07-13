import React , {useState} from 'react'

export default function FormHandling() {
	const[formData,setFormData]=useState({
		username:'',
		email:'',
		password:'',
        isSubscribed:'',
		role:''
	})
	const handleChange=(event)=>{
		const {name,value,type,checked}=event.target;
		const fieldValue =type==='checkbox'?checked:value;
		console.log(name, fieldValue);
		setFormData({
			...formData,
			[name]:fieldValue
		})
	}
	const handleSubmit =(event)=>{
            event.preventDefault();//multiple click single work after no refresh browser
			console.log("Form Data",formData);
	}
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label style={{backgroundColor:'black'}} htmlFor="username"></label>
					<input
					placeholder='Name'
					type='text'
					id='username'
					name='username'
                    value={formData.username}
					onChange={handleChange}
					/>
				</div>
					<div>
					<label htmlFor="email"></label>
					<input
					type='text'
					placeholder='Email'
					id='email'
					name='email'
                    value={formData.email}
					onChange={handleChange}
					/>
				</div>
					<div>
					<label htmlFor="password"></label>
					<input
					type='text'
					placeholder='Password'
					id='password'
					name='password'
                    value={formData.password}
					onChange={handleChange}
					/>
				</div>
					<div>
					<label htmlFor="isSubscribed"></label>
					<input
					type='text'
					placeholder='Subscribe'
					id='isSubscribed'
					name='isSubscribed'
                    value={formData.isSubscribed}
					onChange={handleChange}
					/>
				</div>
					<div>
					<label htmlFor="role"></label>
				     <select
					 placeholder='Role'
					 id='role'
					 name='role'
					 value={formData.role}
					onChange={handleChange}
					 >
					 <option value=''>Select Role</option>
					 <option value='admin'>admin</option>
					 <option value='user'>User</option>
					 <option value='guest'>Guest</option>
					 </select>
				</div>
				     <button type='submit' >Submit</button>
			</form>
		</>
	)
}

 
