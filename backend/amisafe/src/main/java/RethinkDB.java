import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.rethinkdb.net.Connection;

import java.io.IOException;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class RethinkDB {

    public static final com.rethinkdb.RethinkDB r = com.rethinkdb.RethinkDB.r;

    public static Connection getConnection()
    {
        return  r.connection().hostname("localhost").port(28015).connect();
    }

    public static <T> T jsonToObject(String json, Class<T> clazz) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, clazz);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public static String objectToJson(Object data) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            mapper.enable(SerializationFeature.INDENT_OUTPUT);
            return mapper.writeValueAsString(data);
        } catch (IOException e){
            throw new RuntimeException(e);
        }
    }
}
