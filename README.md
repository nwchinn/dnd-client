# DnD Encounter App

By Nick Chinn <nwchinn@gmail.com>

This app helps a DM run DnD 5e encounters and will eventually track player stats, xp, etc.

## Stack

- React (Typescript/Javascript)
- Flask (Python)
- Sqlite
- Material UI (React UI Components)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## APIs

### Open5e

https://api.open5e.com/

https://open5e.com/

Examples:

Monsters: https://api.open5e.com/monsters/

Single Monster: https://api.open5e.com/monsters/accursed-defiler/


# Client/Running Project/React Info

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).












---- Will be in a different repo -----

# Server/Flask Info

## Virtual Env

### Setting up virtual env

When setting up the project, you should set up a virtual environment to install the Python tools and libraries locally, which won't affect Python tools and libraries elsewhere on your computer.

The folder: *env/* contains all the Python libraries and to create it, run the following command in the project directory:

`python3 -m venv env`

**Pitfall**: If you’re on OSX and have previously installed Anaconda, use the full path to the Python executable.
```
$ which python
/Users/nwchinn/anaconda/bin/python
$ rm -rf env  # Remove environment from previous step and start over
$ /usr/local/bin/python3 -m venv env
```

**Pitfall**: If the PYTHONPATH environment variable is set, then this can cause problems. Check this when you first start a new shell.
```
$ echo $PYTHONPATH  # Output isn't blank, problem!
/Users/nwchinn/anaconda/lib/
$ rm -rf env  # Remove environment from previous step and start over
$ unset PYTHONPATH
$ python3 -m venv env
```

Activate virtual environment. You’ll need to do this every time you start a new shell.

`$ source env/bin/activate`

Set Environment Variable if there wasn't .flaskenv
(venv) $ export FLASK_APP=server.py


To see what's installed in your virtual environment use one of the following commands:
```
$ which pip
/Users/nwchinn/code/dnd-app/env/bin/pip
$ pip --version
pip 20.0.2 from /Users/nwchinn/code/dnd-app/env/lib/python3.6/site-packages (python 3.8)  # Your version may be different
```

```
$ ls env/lib/python3.8/site-packages/
pip
setuptools
...
```

Upgrade the Python tools in your virtual environment:

`$ pip install --upgrade pip setuptools wheel`


### Run App:
`$ flask run`
Note: might have to download: `sudo apt install python3-flask`

### Env Variables

Install:
`(venv) $ pip install python-dotenv`

`export FLASK_APP=server.py`

## DB

```
python3 -m venv venv
pip install flask
pip install python-dotenv
export FLASK_APP=server.py
pip install flask-sqlalchemy
flask run
```

## SQLite Info

https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-iv-database

Only have to do when setting up virtual env
(venv) $ pip install flask-sqlalchemy

(venv) $ pip install flask-migrate

Initialize DB:
(venv) $ flask db init

First DB Migration:
(venv) $ flask db migrate -m "users table"

The output of the command gives you an idea of what Alembic included in the migration. The first two lines are informational and can usually be ignored. It then says that it found a user table and two indexes. Then it tells you where it wrote the migration script. The e517276bb1c2 code is an automatically generated unique code for the migration (it will be different for you). The comment given with the -m option is optional, it adds a short descriptive text to the migration.

The generated migration script is now part of your project, and needs to be incorporated to source control. You are welcome to inspect the script if you are curious to see how it looks. You will find that it has two functions called upgrade() and downgrade(). The upgrade() function applies the migration, and the downgrade() function removes it. This allows Alembic to migrate the database to any point in the history, even to older versions, by using the downgrade path.

The flask db migrate command does not make any changes to the database, it just generates the migration script. To apply the changes to the database, the flask db upgrade command must be used.

(venv) $ flask db upgrade
INFO  [alembic.runtime.migration] Context impl SQLiteImpl.
INFO  [alembic.runtime.migration] Will assume non-transactional DDL.
INFO  [alembic.runtime.migration] Running upgrade  -> e517276bb1c2, users table

Because this application uses SQLite, the upgrade command will detect that a database does not exist and will create it (you will notice a file named app.db is added after this command finishes, that is the SQLite database). When working with database servers such as MySQL and PostgreSQL, you have to create the database in the database server before running upgrade.

Note that Flask-SQLAlchemy uses a "snake case" naming convention for database tables by default. For the User model above, the corresponding table in the database will be named user. For a AddressAndPhone model class, the table would be named address_and_phone. If you prefer to choose your own table names, you can add an attribute named __tablename__ to the model class, set to the desired name as a string.


Fire up DB with Python compiler: 
(venv) $ flask shell
