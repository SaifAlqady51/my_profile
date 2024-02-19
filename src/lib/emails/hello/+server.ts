import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
	service:'gmail',
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	auth: {
		user:'saifalqady52@gmail.com',
		pass:'zmaj uano pqro wtcn'
	}

});

// transporter.verify((error,success) => {

// 	if(error){
// 		console.log(error)
// 	}
// 	else{
// 		console.log('Server is ready for your message')
// 	}

// })


// const emailHtml = render({
// 	template: Hello,
// 	props: {
// 		name: 'Svelte'
// 	}
// });

const options = {
	from: 'saifalqady52@gmail.com',
	to: 'saifalqady51@gmail.com',
	subject: 'hello world',
	html:`<h1>fdsgjslkdj</h1>` 
};



const sendEmail = async() => { 
	try{
		console.log('before')
	 await transporter.sendMail(options)

		console.log('after')
	}
	catch(error){
		console.log(error)
	}
}

export default sendEmail 


