async function login(e){
	
		e.preventDefault();
		console.log(e.target.email.value);

		const loginDetails ={
			email: e.target.email.value,
			password: e.target.password.value
		}

		console.log(loginDetails)

		const response =await axios.post('http://localhost:3000/user/login',loginDetails).then(response=> {

		if(response.status=== 200)
		{
			alert(response.data.message)
		}
		else{
			throw new Error (response.data.message)
		}

	}).catch(err => {
	   console.log(JSON.stringify(err))
		document.body.innerHTML +='<div style="color:black;" >${err.message} <div>';
    })

}




	

