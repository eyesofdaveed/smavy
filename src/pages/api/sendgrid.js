import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

console.log(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  console.log(req.body);
  try {
    await sendgrid.send({
      to: "smavyip@gmail.com",
      from: "smavyip@gmail.com",
      subject: `Новый запрос с сайта ${req.body.email}`,
      html: `
        <div>Имя: ${req.body.name}</div>
        <div>Email: ${req.body.email}</div>
        <div>Телефон: ${req.body.phone}</div>
        <div>Направление: ${req.body.option}</div>
      `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
