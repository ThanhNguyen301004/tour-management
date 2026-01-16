package com.example.App_api.vnpay;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class VnpayDto implements Serializable {
    private String status;
    private String message;
    private String URL;
}
