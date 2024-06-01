SELECT employee_id FROM (SELECT * FROM Employees 
FULL JOIN Salaries USING(employee_id)) t
where (t.name is null or t.salary is null)