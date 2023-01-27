const sql = require("mssql");
const parser = require("mssql-connection-string");

class PeopleDbContext {
  constructor(connectionString, log) {
    log("PeopleDbContext object has been created.");
    this.log = log;
    this.config = parser(connectionString);
    this.getPeople = this.getPeople.bind(this);
  }

  async getPeople(id) {
    this.log("getPeople function - run");
    const connection = await new sql.ConnectionPool(this.config).connect();
    const request = new sql.Request(connection);
    let result = null;
    if (id === undefined || id === null) {
      result = await request.query("SELECT * FROM People");
    } else {
      result = await request.query(
        "SELECT * FROM People WHERE PersonId =" + "'" + id + "';"
      );
    }
    this.log("getPeople function - OK");
    return result.recordset;
  }

  async addPeople(FirstName, LastName, PhoneNumber) {
    this.log("addPeople function - run");
    const connection = await new sql.ConnectionPool(this.config).connect();
    const request = new sql.Request(connection);
    const result = await request.query(
      "INSERT INTO People (FirstName, LastName, PhoneNumber) VALUES (" +
        "'" +
        FirstName +
        "'" +
        "," +
        "'" +
        LastName +
        "'" +
        "," +
        "'" +
        PhoneNumber +
        "'" +
        ");"
    );
    this.log("addPeople function - OK");
    return result.recordset;
  }

  async delPeople(id) {
    this.log("delPeople function - run");
    const connection = await new sql.ConnectionPool(this.config).connect();
    const request = new sql.Request(connection);
    const result = await request.query(
      "DELETE FROM People WHERE PersonID = " + "'" + id + "';"
    );
    this.log("delPeople function - OK");
    return result.recordset;
  }
}

module.exports = PeopleDbContext;
