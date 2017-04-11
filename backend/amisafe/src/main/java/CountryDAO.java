import com.rethinkdb.net.Cursor;
import com.sun.org.apache.bcel.internal.generic.RETURN;

import java.util.HashMap;
import java.util.List;

/**
 * Created by meltingice on 11-Apr-17.
 */
public class CountryDAO {

    public static Country getCountry(String iso)
    {
        Cursor<HashMap> result  = RethinkDB.getInstance().r
                .db("maindb")
                .table("countries")
                .filter((doc) ->
                        doc.g("iso").eq(iso)
                )
                .run(RethinkDB.getInstance().getConnection());
        if(!result.hasNext())
            return null;
        return new Country(result.next());
    }

    public static CountryData getCountryData(String country)
    {
        Cursor<HashMap> result =  RethinkDB.getInstance().r
                .db("maindb")
                .table("data")
                .map((doc)-> doc.merge(
                        RethinkDB.getInstance().r.hashMap("features", doc.g("data").filter( (aspect) -> aspect.g("country").eq(country)).concatMap( (ft) -> ft.g("features"))),
                        RethinkDB.getInstance().r.hashMap("rank", doc.g("data").filter( (aspect) -> aspect.g("country").eq(country)).getField("rank"))
                ).without("data"))
                .run( RethinkDB.getInstance().getConnection());
        CountryData cd = new CountryData(country, 23,  result.toList());

        return cd;
    }

    public static List getAllCountries() {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("countries")
                .run( RethinkDB.getInstance().getConnection());
        return result.toList();
    }

    public static List getAspect(String aspect) {
        Cursor<HashMap> result =  RethinkDB.getInstance().r.
                db("maindb")
                .table("data")
                .filter( (t) -> t.g("type").eq(aspect))
                .run( RethinkDB.getInstance().getConnection());
        return result.toList();
    }
}
