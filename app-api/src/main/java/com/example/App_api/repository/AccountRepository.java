package com.example.App_api.repository;

import com.example.App_api.model.Account;
import com.example.App_api.model.Schedule;
import com.example.App_api.response.AccountResponse;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AccountRepository extends MongoRepository<Account,String> {
    @Query("{'email' : ?0 }")
    public AccountResponse getAcountByEmail(String email);

    @Query("{'idFacebook' : ?0 }")
    public Account getAccountByIDFacebook(String idFB);
    @Query("{'status' : true }")
    public List<AccountResponse> getAcountActive();

    @Query("{'email' : ?0 ,'password' : ?1 }")
    public Account login(String email,String password);
    @Aggregation(pipeline = {"{'$sort':{'typeAccount':-1}}"})
    List<AccountResponse> getAll();


}
