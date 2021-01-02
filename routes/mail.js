const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const crypto = require('crypto');


router.post('/send', function(req, res, next){
    //메일 전송 SMTP 설정
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.email.com",
        port: 587,
        secure: false,
        auth: {
          user: "user@gmail.com", //gmail 주소
          pass: 'pass' //gmail 계정 password
        }
      });

      //메일 내용 설정
      let mail = {
        from: req.body.email, //발송인 메일 주소
        to: "user@gmail.com", //수신자 메일 주소
        subject: "내 포트폴리오에서 전송된 메일입니다.", //메일 제목
        text: '발신자 : '+ req.body.name + ' / '+ req.body.email + '<br>' + req.body.message //메일 내용
      };
      
      //메일 전송
      transporter.sendMail(mail, function(error, info){
        if(error){
            console.log('mail send error : ', error)
            res.send(error)
        }else{
            res.send(info)
            console.log('메일이 발송되었습니다. ',info.messageId );
            res.redirect('/');
        }
      });
})

  module.exports = router ;