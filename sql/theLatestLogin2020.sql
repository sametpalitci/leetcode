SELECT 
    user_id, MAX(time_stamp) as last_stamp FROM Logins 
WHERE 
    DATE_PART('year', time_stamp) = 2020
GROUP BY user_id;
