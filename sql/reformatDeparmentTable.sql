SELECT 
    id,
    SUM(CASE WHEN Month = 'Jan' THEN Revenue ELSE NULL END) AS Jan_revenue,
    SUM(CASE WHEN Month = 'Feb' THEN Revenue ELSE NULL END) AS Feb_revenue,
    SUM(CASE WHEN Month = 'Mar' THEN Revenue ELSE NULL END) AS Mar_revenue,
    SUM(CASE WHEN Month = 'Apr' THEN Revenue ELSE NULL END) AS Apr_revenue,
    SUM(CASE WHEN Month = 'May' THEN Revenue ELSE NULL END) AS May_revenue,
    SUM(CASE WHEN Month = 'Jun' THEN Revenue ELSE NULL END) AS Jun_revenue,
    SUM(CASE WHEN Month = 'Jul' THEN Revenue ELSE NULL END) AS Jul_revenue,
    SUM(CASE WHEN Month = 'Aug' THEN Revenue ELSE NULL END) AS Aug_revenue,
    SUM(CASE WHEN Month = 'Sep' THEN Revenue ELSE NULL END) AS Sep_revenue,
    SUM(CASE WHEN Month = 'Oct' THEN Revenue ELSE NULL END) AS Oct_revenue,
    SUM(CASE WHEN Month = 'Nov' THEN Revenue ELSE NULL END) AS Nov_revenue,
    SUM(CASE WHEN Month = 'Dec' THEN Revenue ELSE NULL END) AS Dec_revenue 
FROM Department GROUP BY id