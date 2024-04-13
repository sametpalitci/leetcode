SELECT e.name as name, b.bonus as bonus FROM Employee as e LEFT JOIN Bonus as b ON
b.empId = e.empId WHERE b.bonus < 1000 or b.bonus is null;