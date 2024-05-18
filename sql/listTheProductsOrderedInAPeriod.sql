SELECT product_name, sum(unit) as unit FROM Products AS pr INNER JOIN Orders as ord
ON pr.product_id = ord.product_id
GROUP BY product_name , to_char(order_date,'yyyy-mm')
HAVING sum(unit) >= 100 AND to_char(order_date,'yyyy-mm') = '2020-02'