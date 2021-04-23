# To-Do-List

A To-Do List developed using React JS with all the main functionalities such as adding, deleting, and editing tasks. As well as a dark mode feature. 
The mock <a href='https://github.com/typicode/json-server'> JSON Server </a> is used as the backend.

Live Version: https://marwa64.github.io/To-Do-List/

## Usage

### Install dependencies

```
npm install
```

### Run React dev server (http://localhost:3000)

```
npm start
```

### Run the JSON server (http://localhost:5000)

```
npm run server
```
## Additional Settings

The  <a href='https://github.com/typicode/json-server'> JSON Server </a> doesn't have the feature to delete all records in a single http request, so I did a small modification to the <a href='https://github.com/typicode/json-server/blob/master/src/server/router/plural.js'> plural.js </a> file.

Change from this:
```
resource = db.get(name).removeById(req.params.id).value(); // Remove dependents documents
const removable = db._.getRemovable(db.getState(), opts);
removable.forEach(item => {
db.get(item.name).removeById(item.id).value();
});
```

To this: 
```
req.params.id.split(',').filter(id => id !== '' || id !== undefined || id !== null).forEach(id => {
			
  resource = db.get(name).removeById(id).value(); // Remove dependents documents
  const removable = db._.getRemovable(db.getState(), opts);
  removable.forEach(item => {
	db.get(item.name).removeById(item.id).value();
  });

});
```
