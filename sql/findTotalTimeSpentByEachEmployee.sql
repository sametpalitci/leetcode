SELECT emp_id, event_day AS day, (sum(out_time) - sum(in_time)) AS total_time
FROM employees GROUP BY day, emp_id;