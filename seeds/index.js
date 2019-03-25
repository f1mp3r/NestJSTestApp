const mysql = require('mysql');
const fs = require('fs');

const con = mysql.createConnection({
  host: process.env.TYPEORM_HOST,
  user: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE
});

const enterQuery = (conneciton, query) => {
  return new Promise((resolve, reject) => {
    conneciton.query(query, (err) => {
      if (err) {
        reject(err);
      }

      resolve();
    });
  });
}

con.connect(async (err) => {
  if (err) throw err;
  console.log("Connected!");

  const query = [];

  const files = fs.readdirSync(__dirname);

  files.filter(file => file.indexOf('.sql') !== -1).forEach(function (file) {
    var contents = fs.readFileSync(__dirname + '/' +  file, 'utf8');
    query.push(contents);
  });

  await Promise.all(query.map(query => {
    return enterQuery(con, query);
  })).catch((error) => {
    throw new Error(error);
  });

  console.log('Done!');
});
