// consultas sencillas: 


// 1. Listar todos los equipos de la disciplina "Natación"
db.equipos.find({disciplina:"Natación"})

// 2. Consultar atletas del país "colombia"
db.atletas.find({pais:"Colombia"})

// 3. Mostrar delegaciones del continente "Europa"
db.delegaciones.find({continente:"Europa"})

// 4. Listar competencias de la fecha "08-10-2025"
db.atletas.find({"competencias.fecha":"08-10-2025"})

// 5. Listar atletas Femeninos
db.atletas.find({sexo:"Femenino"})

