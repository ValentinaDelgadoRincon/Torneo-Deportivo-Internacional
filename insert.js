db.insertMany([
    {
      "id": "01",
      "pais": "España",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Natación",
          "equipo_id": "101"
        },
        {
          "disciplina": "Fútbol",
          "equipo_id": "112"
        }
      ],
      "medallas_totales": {
        "oro": 3,
        "plata": 2,
        "bronce": 1
      }
    },
    {
      "id": "02",
      "pais": "Francia",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Fútbol",
          "equipo_id": "108"
        }
      ],
      "medallas_totales": {
        "oro": 1,
        "plata": 0,
        "bronce": 1
      }
    },
    {
      "id": "03",
      "pais": "Colombia",
      "continente": "América",
      "equipos": [
        {
          "disciplina": "Ciclismo",
          "equipo_id": "103"
        }
      ],
      "medallas_totales": {
        "oro": 1,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "04",
      "pais": "Argentina",
      "continente": "América",
      "equipos": [],
      "medallas_totales": {
        "oro": 0,
        "plata": 1,
        "bronce": 0
      }
    },
    {
      "id": "05",
      "pais": "Estados Unidos",
      "continente": "América",
      "equipos": [
        {
          "disciplina": "Natación",
          "equipo_id": "105"
        }
      ],
      "medallas_totales": {
        "oro": 1,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "06",
      "pais": "Hungría",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Esgrima",
          "equipo_id": "106"
        }
      ],
      "medallas_totales": {
        "oro": 0,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "07",
      "pais": "Jamaica",
      "continente": "América",
      "equipos": [
        {
          "disciplina": "Atletismo",
          "equipo_id": "107"
        }
      ],
      "medallas_totales": {
        "oro": 0,
        "plata": 1,
        "bronce": 0
      }
    },
    {
      "id": "08",
      "pais": "Países Bajos",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Ciclismo",
          "equipo_id": "109"
        }
      ],
      "medallas_totales": {
        "oro": 1,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "09",
      "pais": "Noruega",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Atletismo",
          "equipo_id": "111"
        }
      ],
      "medallas_totales": {
        "oro": 1,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "10",
      "pais": "Eslovenia",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Ciclismo",
          "equipo_id": "113"
        }
      ],
      "medallas_totales": {
        "oro": 0,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "11",
      "pais": "Venezuela",
      "continente": "América",
      "equipos": [
        {
          "disciplina": "Atletismo",
          "equipo_id": "114"
        }
      ],
      "medallas_totales": {
        "oro": 1,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "12",
      "pais": "Italia",
      "continente": "Europa",
      "equipos": [
        {
          "disciplina": "Judo",
          "equipo_id": "115"
        }
      ],
      "medallas_totales": {
        "oro": 0,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "13",
      "pais": "China",
      "continente": "Asia",
      "equipos": [
        {
          "disciplina": "Esgrima",
          "equipo_id": "110"
        }
      ],
      "medallas_totales": {
        "oro": 0,
        "plata": 0,
        "bronce": 1
      }
    },
    {
      "id": "14",
      "pais": "Alemania",
      "continente": "Europa",
      "equipos": [],
      "medallas_totales": {
        "oro": 0,
        "plata": 0,
        "bronce": 0
      }
    },
    {
      "id": "15",
      "pais": "Brasil",
      "continente": "América",
      "equipos": [],
      "medallas_totales": {
        "oro": 0,
        "plata": 0,
        "bronce": 0
      }
    }
  ])


  db.insertMany([{
    "id": "101",
    "nombre_equipo": "España Natación Masculino",
    "disciplina": "Natación",
    "delegacion_id": "01",
    "integrantes": [
      {
        "atleta_id": "01",
        "nombre": "Michael Phelps",
        "edad": 24,
        "estilo": "crol libre"
      },
      {
        "atleta_id": "02",
        "nombre": "Juan Martínez",
        "edad": 25,
        "estilo": "espalda"
      },
      {
        "atleta_id": "03",
        "nombre": "Miguel Torres",
        "edad": 22,
        "estilo": "braza"
      }
    ]
  },

  
    {
      "id": "102",
      "nombre_equipo": "Argentina Fútbol Masculino",
      "disciplina": "Fútbol",
      "delegacion_id": "02",
      "integrantes": [
        {
          "atleta_id": "04",
          "nombre": "Lionel Messi",
          "edad": 38,
          "estilo": "delantero"
        },
        {
          "atleta_id": "05",
          "nombre": "Paulo Dybala",
          "edad": 31,
          "estilo": "mediapunta"
        },
        {
          "atleta_id": "06",
          "nombre": "Emiliano Martínez",
          "edad": 33,
          "estilo": "portero"
        }
      ]
    },
    {
      "id": "103",
      "nombre_equipo": "Colombia BMX Femenino",
      "disciplina": "Ciclismo",
      "delegacion_id": "03",
      "integrantes": [
        {
          "atleta_id": "07",
          "nombre": "Mariana Pajón",
          "edad": 33,
          "estilo": "BMX"
        },
        {
          "atleta_id": "08",
          "nombre": "Gabriela Bolle",
          "edad": 27,
          "estilo": "BMX"
        },
        {
          "atleta_id": "09",
          "nombre": "Andrea Escobar",
          "edad": 29,
          "estilo": "BMX"
        }
      ]
    },
    {
      "id": "104",
      "nombre_equipo": "Francia Judo Masculino",
      "disciplina": "Judo",
      "delegacion_id": "04",
      "integrantes": [
        {
          "atleta_id": "10",
          "nombre": "Teddy Riner",
          "edad": 36,
          "estilo": "+100kg"
        },
        {
          "atleta_id": "11",
          "nombre": "Luka Mkheidze",
          "edad": 28,
          "estilo": "-60kg"
        },
        {
          "atleta_id": "12",
          "nombre": "Axel Clerget",
          "edad": 38,
          "estilo": "-90kg"
        }
      ]
    },
    {
      "id": "105",
      "nombre_equipo": "USA Natación Femenino",
      "disciplina": "Natación",
      "delegacion_id": "05",
      "integrantes": [
        {
          "atleta_id": "13",
          "nombre": "Katie Ledecky",
          "edad": 28,
          "estilo": "libre"
        },
        {
          "atleta_id": "14",
          "nombre": "Simone Manuel",
          "edad": 29,
          "estilo": "mariposa"
        },
        {
          "atleta_id": "15",
          "nombre": "Regan Smith",
          "edad": 25,
          "estilo": "espalda"
        }
      ]
    },
    {
      "id": "106",
      "nombre_equipo": "Hungría Esgrima Masculino",
      "disciplina": "Esgrima",
      "delegacion_id": "06",
      "integrantes": [
        {
          "atleta_id": "16",
          "nombre": "Árpad Szabó",
          "edad": 29,
          "estilo": "espada"
        },
        {
          "atleta_id": "17",
          "nombre": "Bence Balla",
          "edad": 28,
          "estilo": "florete"
        },
        {
          "atleta_id": "18",
          "nombre": "Gergely Siklósi",
          "edad": 31,
          "estilo": "sable"
        }
      ]
    },
    {
      "id": "107",
      "nombre_equipo": "Jamaica Atletismo Femenino",
      "disciplina": "Atletismo",
      "delegacion_id": "07",
      "integrantes": [
        {
          "atleta_id": "19",
          "nombre": "Shelly-Ann Fraser-Pryce",
          "edad": 38,
          "estilo": "velocista"
        },
        {
          "atleta_id": "20",
          "nombre": "Elaine Thompson-Herah",
          "edad": 33,
          "estilo": "velocista"
        },
        {
          "atleta_id": "21",
          "nombre": "Shericka Jackson",
          "edad": 31,
          "estilo": "velocista"
        }
      ]
    },
    {
      "id": "108",
      "nombre_equipo": "Francia Fútbol Masculino",
      "disciplina": "Fútbol",
      "delegacion_id": "02",
      "integrantes": [
        {
          "atleta_id": "22",
          "nombre": "Kylian Mbappé",
          "edad": 26,
          "estilo": "delantero"
        },
        {
          "atleta_id": "23",
          "nombre": "Eduardo Camavinga",
          "edad": 23,
          "estilo": "mediocampista"
        },
        {
          "atleta_id": "24",
          "nombre": "Mike Maignan",
          "edad": 30,
          "estilo": "portero"
        }
      ]
    },
    {
      "id": "109",
      "nombre_equipo": "Países Bajos Ciclismo Ruta Femenino",
      "disciplina": "Ciclismo",
      "delegacion_id": "08",
      "integrantes": [
        {
          "atleta_id": "25",
          "nombre": "Annemiek van Vleuten",
          "edad": 42,
          "estilo": "ruta"
        },
        {
          "atleta_id": "26",
          "nombre": "Demi Vollering",
          "edad": 29,
          "estilo": "contrarreloj"
        },
        {
          "atleta_id": "27",
          "nombre": "Ellen van Dijk",
          "edad": 36,
          "estilo": "contrarreloj"
        }
      ]
    },
    {
      "id": "110",
      "nombre_equipo": "China Esgrima Femenino",
      "disciplina": "Esgrima",
      "delegacion_id": "06",
      "integrantes": [
        {
          "atleta_id": "28",
          "nombre": "Sun Yiwen",
          "edad": 33,
          "estilo": "espada"
        },
        {
          "atleta_id": "29",
          "nombre": "Xu Anqi",
          "edad": 34,
          "estilo": "espada"
        },
        {
          "atleta_id": "30",
          "nombre": "Zhu Mingye",
          "edad": 31,
          "estilo": "florete"
        }
      ]
    },
    {
      "id": "111",
      "nombre_equipo": "Noruega Atletismo Masculino",
      "disciplina": "Atletismo",
      "delegacion_id": "09",
      "integrantes": [
        {
          "atleta_id": "31",
          "nombre": "Karsten Warholm",
          "edad": 29,
          "estilo": "400m vallas"
        },
        {
          "atleta_id": "32",
          "nombre": "Jakob Ingebrigtsen",
          "edad": 25,
          "estilo": "medio fondo"
        },
        {
          "atleta_id": "33",
          "nombre": "Filip Ingebrigtsen",
          "edad": 33,
          "estilo": "medio fondo"
        }
      ]
    },
    {
      "id": "112",
      "nombre_equipo": "España Fútbol Femenino",
      "disciplina": "Fútbol",
      "delegacion_id": "01",
      "integrantes": [
        {
          "atleta_id": "34",
          "nombre": "Alexia Putellas",
          "edad": 31,
          "estilo": "mediocampista"
        },
        {
          "atleta_id": "35",
          "nombre": "Jenni Hermoso",
          "edad": 35,
          "estilo": "delantera"
        },
        {
          "atleta_id": "36",
          "nombre": "Misa Rodríguez",
          "edad": 26,
          "estilo": "portera"
        }
      ]
    },
    {
      "id": "113",
      "nombre_equipo": "Eslovenia Ciclismo Ruta Masculino",
      "disciplina": "Ciclismo",
      "delegacion_id": "10",
      "integrantes": [
        {
          "atleta_id": "37",
          "nombre": "Primož Roglič",
          "edad": 35,
          "estilo": "ruta"
        },
        {
          "atleta_id": "38",
          "nombre": "Tadej Pogačar",
          "edad": 27,
          "estilo": "montaña"
        },
        {
          "atleta_id": "39",
          "nombre": "Jan Polanc",
          "edad": 33,
          "estilo": "contrarreloj"
        }
      ]
    },
    {
      "id": "114",
      "nombre_equipo": "Venezuela Atletismo Femenino",
      "disciplina": "Atletismo",
      "delegacion_id": "11",
      "integrantes": [
        {
          "atleta_id": "40",
          "nombre": "Yulimar Rojas",
          "edad": 30,
          "estilo": "salto triple"
        },
        {
          "atleta_id": "41",
          "nombre": "Joselyn Brea",
          "edad": 30,
          "estilo": "medio fondo"
        },
        {
          "atleta_id": "42",
          "nombre": "Rosa Rodríguez",
          "edad": 39,
          "estilo": "lanzamiento de martillo"
        }
      ]
    },
    {
      "id": "115",
      "nombre_equipo": "Italia Judo Femenino",
      "disciplina": "Judo",
      "delegacion_id": "12",
      "integrantes": [
        {
          "atleta_id": "43",
          "nombre": "Odette Giuffrida",
          "edad": 31,
          "estilo": "-52kg"
        },
        {
          "atleta_id": "44",
          "nombre": "Alice Bellandi",
          "edad": 27,
          "estilo": "-78kg"
        },
        {
          "atleta_id": "45",
          "nombre": "Assunta Scutto",
          "edad": 23,
          "estilo": "-48kg"
        }
      ]
    }
  
  
]
    
   )

db.insertMany([{
    "id": "01",
    "nombre_atleta": "Michael Phelps",
    "edad": 24,
    "sexo": "Masculino",
    "pais": "España",
    "deporte": "Natación",
    "equipo_id": 101,
    "competencias": [
      {
        "evento": "100m Libre",
        "fecha": "08-10-2025",
        "medalla": "oro"
      },
      {
        "evento": "200m Libre",
        "fecha": "08-12-2025",
        "medalla": null
      }
    ]
  },
  
    {
      "id": "02",
      "nombre_atleta": "Lionel Messi",
      "edad": 38,
      "sexo": "Masculino",
      "pais": "Argentina",
      "deporte": "Fútbol",
      "equipo_id": 102,
      "competencias": [
        {
          "evento": "Fútbol Masculino - Final",
          "fecha": "08-15-2025",
          "medalla": "plata"
        }
      ]
    },
    {
      "id": "03",
      "nombre_atleta": "Mariana Pajón",
      "edad": 33,
      "sexo": "Femenino",
      "pais": "Colombia",
      "deporte": "Ciclismo",
      "equipo_id": 103,
      "competencias": [
        {
          "evento": "BMX Carrera Femenina",
          "fecha": "08-11-2025",
          "medalla": "oro"
        }
      ]
    },
    {
      "id": "04",
      "nombre_atleta": "Teddy Riner",
      "edad": 36,
      "sexo": "Masculino",
      "pais": "Francia",
      "deporte": "Judo",
      "equipo_id": 104,
      "competencias": [
        {
          "evento": "+100kg Masculino",
          "fecha": "08-09-2025",
          "medalla": "bronce"
        }
      ]
    },
    {
      "id": "05",
      "nombre_atleta": "Katie Ledecky",
      "edad": 28,
      "sexo": "Femenino",
      "pais": "Estados Unidos",
      "deporte": "Natación",
      "equipo_id": 105,
      "competencias": [
        {
          "evento": "800m Libre",
          "fecha": "08-13-2025",
          "medalla": "oro"
        }
      ]
    },
    {
      "id": "06",
      "nombre_atleta": "Árpad Szabó",
      "edad": 29,
      "sexo": "Masculino",
      "pais": "Hungría",
      "deporte": "Esgrima",
      "equipo_id": 106,
      "competencias": [
        {
          "evento": "Espada Individual",
          "fecha": "08-10-2025",
          "medalla": null
        }
      ]
    },
    {
      "id": "07",
      "nombre_atleta": "Shelly-Ann Fraser-Pryce",
      "edad": 38,
      "sexo": "Femenino",
      "pais": "Jamaica",
      "deporte": "Atletismo",
      "equipo_id": 107,
      "competencias": [
        {
          "evento": "100m Planos",
          "fecha": "08-08-2025",
          "medalla": "plata"
        }
      ]
    },
    {
      "id": "08",
      "nombre_atleta": "Kylian Mbappé",
      "edad": 26,
      "sexo": "Masculino",
      "pais": "Francia",
      "deporte": "Fútbol",
      "equipo_id": 102,
      "competencias": [
        {
          "evento": "Fútbol Masculino - Semifinal",
          "fecha": "08-12-2025",
          "medalla": null
        }
      ]
    },
    {
      "id": "09",
      "nombre_atleta": "Annemiek van Vleuten",
      "edad": 42,
      "sexo": "Femenino",
      "pais": "Países Bajos",
      "deporte": "Ciclismo",
      "equipo_id": 103,
      "competencias": [
        {
          "evento": "Contrarreloj Individual",
          "fecha": "08-10-2025",
          "medalla": "oro"
        }
      ]
    },
    {
      "id": "10",
      "nombre_atleta": "Clarisse Agbegnenou",
      "edad": 32,
      "sexo": "Femenino",
      "pais": "Francia",
      "deporte": "Judo",
      "equipo_id": 104,
      "competencias": [
        {
          "evento": "-63kg Femenino",
          "fecha": "08-07-2025",
          "medalla": "oro"
        }
      ]
    },
    {
      "id": "11",
      "nombre_atleta": "Caeleb Dressel",
      "edad": 29,
      "sexo": "Masculino",
      "pais": "Estados Unidos",
      "deporte": "Natación",
      "equipo_id": 105,
      "competencias": [
        {
          "evento": "100m Mariposa",
          "fecha": "08-14-2025",
          "medalla": null
        }
      ]
    },
    {
      "id": "12",
      "nombre_atleta": "Sun Yiwen",
      "edad": 33,
      "sexo": "Femenino",
      "pais": "China",
      "deporte": "Esgrima",
      "equipo_id": 106,
      "competencias": [
        {
          "evento": "Espada Individual Femenina",
          "fecha": "08-10-2025",
          "medalla": "bronce"
        }
      ]
    },
    {
      "id": "13",
      "nombre_atleta": "Karsten Warholm",
      "edad": 29,
      "sexo": "Masculino",
      "pais": "Noruega",
      "deporte": "Atletismo",
      "equipo_id": 107,
      "competencias": [
        {
          "evento": "400m con Vallas",
          "fecha": "08-09-2025",
          "medalla": "oro"
        }
      ]
    },
    {
      "id": "14",
      "nombre_atleta": "Alexia Putellas",
      "edad": 31,
      "sexo": "Femenino",
      "pais": "España",
      "deporte": "Fútbol",
      "equipo_id": 108,
      "competencias": [
        {
          "evento": "Fútbol Femenino - Final",
          "fecha": "08-14-2025",
          "medalla": "oro"
        }
      ]
    },
    {
      "id": "15",
      "nombre_atleta": "Primož Roglič",
      "edad": 35,
      "sexo": "Masculino",
      "pais": "Eslovenia",
      "deporte": "Ciclismo",
      "equipo_id": 109,
      "competencias": [
        {
          "evento": "Carrera en Ruta",
          "fecha": "08-13-2025",
          "medalla": null
        }
      ]
    },
    {
      "id": "16",
      "nombre_atleta": "Yulimar Rojas",
      "edad": 30,
      "sexo": "Femenino",
      "pais": "Venezuela",
      "deporte": "Atletismo",
      "equipo_id": 107,
      "competencias": [
        {
          "evento": "Salto Triple",
          "fecha": "08-08-2025",
          "medalla": "oro"
        }
      ]
    }
  ]
  

)
