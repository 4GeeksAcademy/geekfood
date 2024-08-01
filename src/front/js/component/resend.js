import { Resend } from 'resend';

const resend = new Resend('re_3Ui1eYGu_6aHdsfgFh7awMjFAN8eLWpFr');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['sebastiansotelog9@gmail.com'],
    subject: 'Bienvenido a Food Geeks!',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();