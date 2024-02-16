import { transporter } from '../helpers/mail.js';
import { Contact } from '../types/contact.js';

export class UsersRepository {
  async contact(data: Contact) {
    const { name, email, phone, isOkTerms, comments } = data;

    await transporter.sendMail({
      from: `WeRent ${process.env.EMAIL}`,
      to: email,
      subject: 'Solicitud de contacto recibida',
      text: `Hola ${name}, esto es una prueba.`,
      html: `
        <p>Nombre: ${name}</p>
        <p>email: ${email}</p>
        <p>telefono: ${phone}</p>
        <p>terminos y condiciones: ${isOkTerms}</p>
        <p>comments: ${comments}</p>
        <span>WeRent</span>`,
    });

    await transporter.sendMail({
      from: `WeRent-Contact-Center ${process.env.EMAIL}`,
      to: `${process.env.EMAIL}`,
      subject: 'Solicitud de contacto',
      text: ` Nombre: ${name}, email: ${email}, telefono: ${phone},  terminos y condiciones: ${isOkTerms}, comments: ${comments}.`,
    });
  }
}
