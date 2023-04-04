import * as nodemailer from 'nodemailer'

export const SendEmail = async (mailInfo) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.FROM_MAIL, // generated ethereal user
      pass: process.env.MAIL_PASSWORD, // generated ethereal password
    },
  })

  const info = await transporter.sendMail({
    from: process.env.FROM_MAIL, // sender address
    to: mailInfo.email, // list of receivers
    subject: '【bagor】メンバー登録完了のお知らせ', // Subject line
    html: `
        <div>
            ${mailInfo.name}  様<br>

            <br>
            BAGORDARE府中${mailInfo.clubName}部の会員登録が完了いたしました。<br>
            <br>
            ==============================<wbr>==============================<br>
            【メールアドレス】${mailInfo.email}<br>
            【パスワード】${mailInfo.password}<br>
            ==============================<wbr>==============================<br>
            <br>
            こちらからログインください<br>
            ${process.env.APP_URL}/login<br>
            <br>

        </div>
    `, // html body
  })

  console.log('Message sent: %s', info.messageId)
}
