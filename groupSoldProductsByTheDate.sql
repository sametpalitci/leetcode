SELECT sell_date, count(distinct product) AS num_sold, string_agg(distinct product, ',') as products
FROM Activities GROUP BY sell_date;