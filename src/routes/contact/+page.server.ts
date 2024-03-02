import transporter from "$lib/emails/emailSetUp.server.js";
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get("from") as string
            const body = formData.get("body") as string
            console.log(email);

            const emailHtml = render({
                template: Hello,
                props: {
                    name:"Svelte",
                    email:email,
                    body: body,
                }
            })

            let html = emailHtml;

            const message = {
                from: email,
                to: "saifalqady52@gmail.com",
                subject: 'message from your profile',
                text: body,
                html: html,
            };

            const sendEmail = async (message:any) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};