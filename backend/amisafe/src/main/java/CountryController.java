import spark.Request;
import spark.Response;

import com.rethinkdb.net.Cursor;
import java.util.HashMap;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryController {

    public static String getCountryData(String country)
    {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("data")
                .map((doc)-> doc.merge(
                        RethinkDB.getInstance().r.hashMap("features", doc.g("data").filter( (aspect) -> aspect.g("country").eq(country)))
                ).without("data"))
                .run( RethinkDB.getInstance().getConnection());
        return RethinkDB.getInstance().objectToJson(result.toList());
    }

    public static String getAllCountries() {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("countries")
                .run( RethinkDB.getInstance().getConnection());
        return RethinkDB.getInstance().objectToJson(result.toList());
    }
}
