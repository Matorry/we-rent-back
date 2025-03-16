import { transporter } from '../helpers/mail.js';
import { Contact } from '../types/contact.js';

export class UsersRepository {
  async contact(data: Contact) {
    const { name, email, message } = data;
    
    await transporter.sendMail({
      from: `${process.env.EMAIL}`,
      to: `${process.env.EMAIL}`,
      subject: 'Solicitud de contacto portfolio',
      text: ` Nombre: ${name}, email: ${email}, message: ${message}.`,
    });
  }
}
