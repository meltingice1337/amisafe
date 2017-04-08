import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.rethinkdb.net.Connection;

import java.io.IOException;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class RethinkDB {
    private static RethinkDB ourInstance = new RethinkDB();

    public static RethinkDB getInstance() {
        return ourInstance;
    }

    private RethinkDB() {
    }

    public final com.rethinkdb.RethinkDB r = com.rethinkdb.RethinkDB.r;

    public Connection getConnection()
    {
        return  r.connection().hostname("localhost").port(28015).connect();
    }

    public <T> T jsonToObject(String json, Class<T> clazz) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, clazz);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public String objectToJson(Object data) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.enable(SerializationFeature.INDENT_OUTPUT);
            return mapper.writeValueAsString(data);
        } catch (IOException e){
            throw new RuntimeException(e);
        }
    }
}
