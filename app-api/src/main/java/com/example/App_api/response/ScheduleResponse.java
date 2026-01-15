package com.example.App_api.response;

import com.example.App_api.model.Schedule;
import com.example.App_api.model.Tour;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ScheduleResponse {
    private Tour tour;
    private List<Schedule> schedules;
}
