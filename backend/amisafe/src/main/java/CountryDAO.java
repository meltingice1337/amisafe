import com.rethinkdb.net.Connection;
import com.rethinkdb.net.Cursor;
import com.sun.org.apache.bcel.internal.generic.RETURN;

import java.util.HashMap;
import java.util.List;

/**
 * Created by meltingice on 11-Apr-17.
 */
public class CountryDAO {

    private Connection rConnection;

    CountryDAO()
    {
        rConnection = RethinkDB.getInstance().getConnection();
    }

    public Country getCountry(String iso)
    {
        Cursor<HashMap> result  = RethinkDB.getInstance().r
                .db("maindb")
                .table("countries")
                .filter((doc) ->
                        doc.g("iso").eq(iso)
                )
                .run(rConnection);
        if(!result.hasNext())
            return null;
        return new Country(result.next());
    }

    public CountryData getCountryData(String country)
    {
        Cursor<HashMap> result =  RethinkDB.getInstance().r
                .db("maindb")
                .table("data")
                .map((doc)-> doc.merge(
                        RethinkDB.getInstance().r.hashMap("features", doc.g("data").filter( (aspect) -> aspect.g("country").eq(country)).concatMap( (ft) -> ft.g("features"))),
                        RethinkDB.getInstance().r.hashMap("rank", doc.g("data").filter( (aspect) -> aspect.g("country").eq(country)).getField("rank"))
                ).without("data"))
                .run( rConnection);
        CountryData cd = new CountryData(country, 23,  result.toList());
        return cd;
    }

    public List getAllCountries() {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("countries")
                .run( rConnection);
        return result.toList();
    }

    public HashMap getAspect(String aspect) {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("data")
                .filter( (t) -> t.g("type").eq(aspect))
                .run( rConnection);
        if(!result.hasNext())
            return null;
        return result.next();
    }
}
