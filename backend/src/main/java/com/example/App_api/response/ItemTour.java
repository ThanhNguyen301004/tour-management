package com.example.App_api.response;

import com.example.App_api.model.Image;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemTour {
    private String id;
    private String title;
    private String subTitle;
    private List<Image> image;

    private String address;
    private String inteval;
    private String vehicle;
    private Double price;
    private Double sale;
    private Boolean status;
    private double star;

}
