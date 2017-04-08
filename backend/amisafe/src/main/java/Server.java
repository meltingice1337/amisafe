import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.rethinkdb.*;
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
            res.header("Access-Control-Allow-Origin", "*");
        });
        path("/api/v1", () -> {
            get("/aspects/:id",   (req, res)  -> CountryController.getCountryData(req.params(":id")));
            get("/countries", (req,res) -> CountryController.getAllCountries());
        });
    }
}
