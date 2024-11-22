import emailjs from 'emailjs-com';
import {useEffect, useRef, useState} from "react";

function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [emailSent, setEmailSent] = useState(false);
    const [emailDelay, setEmailDelay] = useState(false);

    function sendEmail(e: any) {
        e.preventDefault();

        if (form.current && !emailDelay) {
            emailjs.sendForm('service_y9bw379', 'template_2wfa5mo', form.current, "GypUzvplGw8qRJpqt").then(() => {
            });
            form.current.reset();
            setEmailSent(true);
            setEmailDelay(true);
        } else {
            console.log("Email already sent");
        }
    }

    useEffect(() => {
        if (emailSent) {
            setTimeout(() => {
                setEmailSent(false);
            }, 5000);
            setTimeout(() => {
                setEmailDelay(false);
            }, 10000);
        }
    }, [emailSent]);

    return (
        <div className={"contactPage"}>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <input type="text" placeholder="Nom" name={"userName"}/>
                    <input type="email" placeholder="Email" name={"userMail"} required={true}/>
                </div>
                <textarea placeholder="Message" name={"message"} required={true}></textarea>
                <button type="submit">Envoyer</button>
            </form>
            <div className={"contactLink"}>
                <div>
                    <img src={`${import.meta.env.BASE_URL}images/contact/instagram.png`} alt={"instagram"}/>
                    <p>@nolan_crrd</p>
                </div>
                <div>
                    <img src={`${import.meta.env.BASE_URL}images/contact/github.png`} alt={"github"}/>
                    <p>@noxiFR</p>
                </div>
                <div>
                    <a href="mailto:correardnolan@gmail.com" target="_blank"><img
                        src={`${import.meta.env.BASE_URL}images/contact/img.png`} alt={"email"}/></a>
                    <p>correardnolan@gmail.com</p>
                </div>
            </div>
            <div className={"sendNotification " + (emailSent ? "visible" : "")}>Email send</div>
        </div>
    );
}

export default Contact;