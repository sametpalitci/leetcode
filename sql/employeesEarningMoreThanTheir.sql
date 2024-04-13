SELECT name as Employee FROM Employee AS e WHERE e.managerId IS NOT NULL 
AND e.salary >  (
       SELECT salary
        FROM Employee WHERE
        id = e.managerId
    ); 