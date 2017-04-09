import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import spark.Request;
import spark.Response;

import com.rethinkdb.net.Cursor;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryController {

    public static String getCountryData(String country)
    {
        String splittedCountry="";
        String[] splitted = country.split(" ");
        for(int i=0;i<splitted.length;i++)
        {
            splittedCountry += splitted[i].substring(0,1).toUpperCase() + splitted[i].substring(1);
            if(i + 1 < splitted.length)
            {
                splittedCountry += " ";
            }
        }
        final String uppercaseCountry = splittedCountry;
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("data")
                .map((doc)-> doc.merge(
                        RethinkDB.getInstance().r.hashMap("features", doc.g("data").filter( (aspect) -> aspect.g("country").eq(uppercaseCountry)).concatMap( (ft) -> ft.g("features"))),
                        RethinkDB.getInstance().r.hashMap("rank", doc.g("data").filter( (aspect) -> aspect.g("country").eq(uppercaseCountry)).getField("rank"))
                ).without("data"))
                .run( RethinkDB.getInstance().getConnection());
        CountryData cd = new CountryData(uppercaseCountry, 23,  result.toList());

        return RethinkDB.getInstance().objectToJson(cd);
    }

    public static String getAllCountries() {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("countries")
                .run( RethinkDB.getInstance().getConnection());
        return RethinkDB.getInstance().objectToJson(result.toList());
    }

    public static String getAspect(String aspect) {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("data")
                .filter( (t) -> t.g("type").eq(aspect))
                .run( RethinkDB.getInstance().getConnection());
        return RethinkDB.getInstance().objectToJson(result.toList().get(0));
    }
}
