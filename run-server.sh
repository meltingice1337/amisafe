pkill -9 java
pkill -9 rethinkdb
java -jar backend/amisafe/target/amisafe-1.0-SNAPSHOT.jar &
cd rethinkdb
rethinkdb --bind all&
