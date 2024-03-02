import * as nodemailer from 'nodemailer'

let transporter = nodemailer.createTransport({
	host:'smtp.gmail.com',
	port:587,
	secure:false,
	auth:{
		user:"saifalqady52@gmail.com",
		pass:"zmaj uano pqro wtcn"
	}
})

transporter.verify(function (error,success){
	if(error){
		console.log(error)
	}
	else{
		console.log('server is ready to take our message')
	}
})

export default transporter