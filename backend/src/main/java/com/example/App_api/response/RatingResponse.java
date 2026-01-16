package com.example.App_api.response;

import com.example.App_api.model.Account;
import com.example.App_api.model.Rating;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RatingResponse {
    private Rating rating;
    private Account account;
}
