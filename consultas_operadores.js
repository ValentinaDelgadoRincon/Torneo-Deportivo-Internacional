// consultas con operadores:

// 1. Atletas con edad entre "20 y 25 años"
db.atletas.find({ edad: { $gte: 20, $lt: 25 } })

// 2. Delegaciones con más de 2 medallas de "oro"
db.delegaciones.find({ "medallas_totales.oro": { $gt: 2 } })

// 3. Competencias despues del "08-08-2025"
db.atletas.find({ "competencias.fecha": { $gt: "08-08-2025" } })

// 4. Equipos donde exista "posicion" 
db.equipos.find({"integrantes.posicion":{$exists:true}})

// 5. Validar que el campo "edad" sea de tipo entero en atletas
db.atletas.find({edad:{$type: "int"}})

// 6. Validar cuales equipos tienen "id par"
db.equipos.find({id:{$mod:[2,0]}})

// 7. Mostrar cual delegacion tiene "2" equipos registrados
db.delegaciones.find({equipos:{$size:2}})

// 8. Mostrar atletas que no son de "Argentina"
db.atletas.find({pais:{$ne:"Argentina"}})

// 9. Equipos donde estilo sea igual a "braza"
db.equipos.find({"integrantes.estilo":{$eq:"braza"}})

// 10. Ordenar por edad ascendente, saltar los primeros 2 atletas, traer los siguientes 5 atletas, y mostrar su nombre.
db.atletas.find( {},{ nombre_atleta: 1, edad: 1, _id: 0 },{ sort: { edad: 1 }, skip: 2, limit: 5 })
