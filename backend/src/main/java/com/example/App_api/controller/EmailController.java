package com.example.App_api.controller;

import com.example.App_api.request.MailRequest;
import com.example.App_api.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mail")
@CrossOrigin
public class EmailController {
    @Autowired
    private EmailSenderService emailSenderService;
    @PostMapping
    public String send(@RequestBody MailRequest mailRequest){
        emailSenderService.sendMail(mailRequest.getToEmail(),mailRequest.getSubject(),mailRequest.getBody());
        return "sent";
    }
    @PostMapping("/html")
    public String sendMailHtml(@RequestBody MailRequest mailRequest){
        emailSenderService.sendMailHtml(mailRequest.getToEmail(),mailRequest.getSubject(),mailRequest.getBody());
        return "sent";
    }
}
