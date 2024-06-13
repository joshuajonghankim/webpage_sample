// lib/db.js
import { Connection, Request } from 'tedious';

// Azure SQL Database 연결 설정
const config = {
  authentication: {
    options: {
      userName: process.env.DB_USER, // Azure SQL 사용자 이름
      password: process.env.DB_PASSWORD, // Azure SQL 비밀번호
    },
    type: 'default',
  },
  server: process.env.DB_SERVER, // 예: 'yourserver.database.windows.net'
  options: {
    database: process.env.DB_NAME, // 예: 'your-database'
    encrypt: true,
  },
};

export function executeQuery(query, params = [], callback) {
  const connection = new Connection(config);

  connection.on('connect', (err) => {
    if (err) {
      console.error('Database connection failed: ', err);
      callback(err, null);
    } else {
      const request = new Request(query, (err, rowCount, rows) => {
        if (err) {
          console.error('Query failed: ', err);
          callback(err, null);
        } else {
          const result = [];
          rows.forEach((columns) => {
            const row = {};
            columns.forEach((column) => {
              row[column.metadata.colName] = column.value;
            });
            result.push(row);
          });
          callback(null, result);
        }
        connection.close();
      });

      params.forEach((param) => {
        request.addParameter(param.name, param.type, param.value);
      });

      connection.execSql(request);
    }
  });

  connection.connect();
}
