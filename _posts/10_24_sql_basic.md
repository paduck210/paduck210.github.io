---
title: "DATA - Basic"
date: 2019-10-24
categories: studying
---

1. Theory

- One to Many Relationship
- Many to Many Relationship 

- Parent Table (ex. City) 
- Each city get various Traveller
- This table has so many chil


- Child Table (ex. Traveller) 
- Each Child only can get one City
- need city information
- it contains City_id
- call it as a foreign key



2. Sytax

```
--- Basic
SELECT first_name, last_name FROM doctors
SELECT * FROM doctors
SELECT * FROM patients
WHERE age = 21
WHERE age != 21

---any chacacter before / but have Surgery
SELECT * FROM doctors
WHERE speciality LIKE '%Surgery' --> ?? Surgerny
WHERE speciality LIKE '%Surgery%' --> ?? Surgery ?? *any thing has Surgery
WHERE speciality LIKE 'Surgery%' --> Surgery ??
WHERE name NOT LIKE 'James' --> Want every one who is not JAMES

---- double filtering 
SELECT * FROM doctors
WHERE speciality LIKE 'Cardiac Surgery'
AND firstt_name = 'Steve'  -- AND
OR firstt_name = 'Steve'     --OR

----Ordering
SELECT * FROM patiens
ORDER BY age DESC -- 내림차순
ORDER BY age ASC   -- 오름차순 **DEFAULT

---- Count the number of Rows
SELECT COUNT(*) FROM doctors
SELECT COUNT(*) AS new_name FROM doctors -- new name of column
SELECT COUNT(*) AS new_name FROM doctors
WHERE speciality = 'Cardiac Surgery'

----Grouping Docors speciality & count 
SELECT COUNT(*) AS count_number, speciality FROM doctors
GROUP BY speciality  ---- Grouping
ORDER BY count_number DESC
```


2. Join 2 Tables 

```
-- Give all the inhabitant from Paris && only Adult

SELECT inhabitants.first_name, inhabitants.last_name, cities.name FROM inhabitants
JOIN cities ON cities.id = inhabitants.city_id
WHERE cities.name = 'Paris'
AND inhabitants.age >= 18

------RENAMEING
SELECT i.first_name, i.last_name, c.name FROM inhabitants AS i
JOIN cities AS c ON c.id = i.city_id
WHERE c.name = 'Paris'
AND i.age >= 18
```


3. Join 3 Tables

```
SELECT artists.name, genres.name, count(*) FROM tracks
JOIN genres ON genres.id = tracks.genre_id
JOIN albums ON albums.id = tracks.album_id
JOIN artists ON artists.id = albums.artist_id
WHERE genres.name = "Rock" 
GROUP BY artists.name
```


4. Advanced 

```
def top_five_artists(db, genre_name)
  query = <<-SQL
  SELECT artists.name, count(*) FROM tracks
  JOIN genres ON genres.id = tracks.genre_id
  JOIN albums ON albums.id = tracks.album_id
  JOIN artists ON artists.id = albums.artist_id
  WHERE genres.name = "#{genre_name}"
  GROUP BY artists.name
  ORDER BY count(*) DESC
  LIMIT 5
  SQL
  raw = db.execute(query)
  return raw
end
```
