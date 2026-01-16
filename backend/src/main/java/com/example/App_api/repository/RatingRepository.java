package com.example.App_api.repository;

import com.example.App_api.model.Rating;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends MongoRepository<Rating,String> {
    @Query("{ 'idTour' : ?0 }")
    List<Rating> getListRatingByIdTour(String id);
}
