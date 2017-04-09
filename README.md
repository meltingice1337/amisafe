# Am i safe ?
![Putin & Co.](http://www.dailysquat.com/wp-content/uploads/2016/08/Coz_b_9XEAATTRl-646x437.jpg)

well, no, not really

Have you ever wondered how safe is your country ? You can check it out now without going on yahoo answers or finding answers on the third google page

# Backend technologies
- Sparkjava framework http://sparkjava.com/
- rethinkdb as database

# Frontend technologies
- Angular (v4)
- ng2-completer https://github.com/oferh/ng2-completer


# Start backend

- Dependencies
  - JAVA JDK http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
  - RethinkDB https://rethinkdb.com/

- Clone the repo
```sh
git clone https://github.com/meltingice1337/ggwp
```
- Go to the backend directory
```sh
cd backend/amisafe
```
- Run
```sh
mvn exec:java -Dexec.mainClass="Server"
```

# Start frontend
- Dependencies
  - NPM https://www.npmjs.com/

- Clone the repo
```sh
git clone https://github.com/meltingice1337/ggwp
```
- Go to the frontend directory
```sh
cd frontend
```
- Change the ```IP``` and ```PORT``` to match your server

countryinfo.service.ts
```sh
 getCountryInfo(country) {
        return this.http.get('http://IP:PORT/api/v1/aspects/' + country.toLowerCase())
            .map((res) => res.json());
    }
    requestGraphData(type) {
        return this.http.get('http://IP:PORT/api/v1/aspect/' + type)
            .map((res) => res.json());
    }
```

search.service.ts
```sh
    getCountry() {
        return this.http.get('http://IP:PORT/api/v1/countries').map(
            (res) => res.json()
        );
    }
```

- Install the dependencies and run
```sh
npm i
npm start
```

- You can build the project so you can deploy using  (a ```dist``` folder will be created and you can directly upload it to any server)
```sh
npm run build
```
