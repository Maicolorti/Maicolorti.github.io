-- Ejercicio 9: Clasificación salarial mediante CASE
SELECT FIRST_NAME || ' ' || LAST_NAME AS EMPLEADO,
       SALARY AS SALARIO,
       CASE
           WHEN SALARY < 1000 THEN 'pobrecito'
           WHEN SALARY < 3000 THEN 'sigue intentando'
           WHEN SALARY < 5000 THEN 'ya casi'
           WHEN SALARY > 10000 THEN 'buenos dias ingeniero'
           ELSE 'otros'
       END AS MENSAJE
FROM HR.EMPLOYEES
ORDER BY SALARY;
