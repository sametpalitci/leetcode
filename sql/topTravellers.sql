SELECT u.name as name, COALESCE(SUM(r.distance), 0) as travelled_distance FROM Users u
LEFT JOIN Rides r ON r.user_id = u.id GROUP BY u.name, u.id ORDER BY travelled_distance DESC, u.name ASC