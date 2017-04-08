import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.rethinkdb.net.Connection;
import com.rethinkdb.net.Cursor;

import java.io.IOException;
import java.util.HashMap;
import java.util.stream.Collectors;

import static spark.Spark.*;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class Server {

    public static void main(String[] args)
    {
        before((req, res) -> {
            res.header("Content-Type", "application/json");
        });

        get("/hello", (req, res) ->  {
            Cursor<HashMap> result =  RethinkDB.r
                    .db("maindb")
                    .table("countries")
                    .run(RethinkDB.getConnection());

            return result.toList().stream()
                    .map(hashMap -> RethinkDB.objectToJson(hashMap))
                    .collect(Collectors.toList());
        });
    }
}
