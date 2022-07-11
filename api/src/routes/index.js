const { Router, response } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Activity, Country } = require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries/activities", async (req, res) => {
  const actividad = await Activity.findAll();
  res.json(actividad);
});

router.get("/countries", async (req, res) => {
  const { name } = req.query;
  const { continente } = req.query;
  const { activity } = req.query;

 // llamo a todos los paises que tengan la actividad pasada por query
  if (activity) {
    const actividades = await Country.findAll({
      include: {
        model: Activity,
        where: {
          nombre: activity,
        },
        // required: true
      },
    });
    res.json(actividades);
  }

  //hago el filtro de continente por query
  else if (continente) {
    const continent = await Country.findAll({
      where: {
        continente: continente,
      },
    });
    res.json(continent);
  }
  //busqueda de nombre por query
  else if (name) {
    const pais = await Country.findAll({
      where: {
        nombre: name,
      },
    });
    res.json(pais);
  } else {
    const countries = await Country.findAll();
    res.json(countries);
  }
});

router.get("/countries/:idPais", async (req, res) => {
  const { idPais } = req.params;
  const detalle = await Country.findByPk(idPais.toUpperCase(), {
    include: Activity,
  });
  if (!detalle) return res.status(404).send("El codigo de pais no existe");
  res.json(detalle);
});

router.post("/activity", async (req, res) => {
  const { nombre, dificultad, duracion, temporada, countries } = req.body;
  const actividad = await Activity.create({
    nombre: nombre,
    dificultad: dificultad,
    duracion: duracion,
    temporada: temporada,
  });

  await actividad.setCountries([...countries]);

  res.json(actividad);
});

module.exports = router;
