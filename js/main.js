
var draftsDB;

function setDB() {
  let dbName = 'draftsDBv0';
  draftsDB = new DB();

  let dbData = {
    docs: [],
    settings: []
  };

  draftsDB.connect(dbName, dbData);
}

setDB();
