const nodemailer = require('nodemailer')

const user = 'portafolio.react@gmail.com'
const pass = 'dq$h^&8T^ic6i4'

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user,
        pass
    }
})

// const sendEmail = ( { name, number, email, message } ) => {
//
//     const mailOptions = {
//         from: user,
//         to:'ke.samata.ramos@gmail.com',
//         subject: `Portafolio - ${name} - ${number}`,
//         text:`$NOMBRE: ${name} - EMAIL:${email} - MENSAJE: ${message} `
//     }
//
//     transporter.sendMail(mailOptions,function(error, info){
//         if(error){
//             console.log(error)
//         }else{
//             console.log('Email enviado '+info.response)
//         }
//     })
//     	
// }


const sendEmail = async( { name, number, email, message } ) => {

    const mailOptions = {
        from: user,
        to:'ke.samata.ramos@gmail.com',
        subject: `Portafolio - ${name} - ${number}`,
        text:`Nombre: ${name} - Email: ${email} - Mensaje: ${message} `
    }

    let info = await transporter.sendMail(mailOptions)
    return info


}



module.exports = { sendEmail }
