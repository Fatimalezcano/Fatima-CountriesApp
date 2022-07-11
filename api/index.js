//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn, Country } = require("./src/db.js");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001, async () => {
    console.log("%s listening at 3001"); // eslint-disable-line no-console

    //me traigo los paises de la api con un axios
    const countriesdb = await Country.findAll();

    if (countriesdb.length < 1) {
      axios.get("https://restcountries.com/v3/all").then((response) => {
        response.data.forEach((c) => {
          var paises = Country.findOrCreate({
            where: {
              id: c.cca3,
              nombre: c.name.common,
              bandera: c.flags[0],
              continente: c.region,
              capital: c.capital ? c.capital.toString() : "",
              subregion: c.subregion ? c.subregion : "",
              area: c.area ? c.area : null,
              poblacion: c.population ? c.population : null,
            },
          });
          return paises;
        });
      });
    }
  });
});
