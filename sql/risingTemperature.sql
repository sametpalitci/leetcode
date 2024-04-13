SELECT cw.id as id FROM Weather AS cw INNER JOIN Weather AS pw
ON pw.recordDate + interval '1 day' = cw.recordDate
WHERE cw.temperature > pw.temperature