import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import spark.Request;
import spark.Response;

import com.rethinkdb.net.Cursor;

import java.io.Console;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryController {
    public static String getCountryData(Request request, Response response) {
        String iso  = request.params(":iso");

        Country country = CountryDAO.getCountry(iso.toUpperCase());
        if(country == null)
        {
            response.status(404);
            return "Not Found";
        }
        CountryData countryData = CountryDAO.getCountryData(country.getName());

        return RethinkDB.getInstance().objectToJson(countryData);
    }

    public static String getAllCountries(Request request, Response response) {
        List countries = CountryDAO.getAllCountries();
        return RethinkDB.getInstance().objectToJson(countries);
    }

    public static String getAspect(Request request, Response response) {
        String aspect = request.params(":aspect");
        List countryAspect = CountryDAO.getAspect(aspect);
        if(countryAspect.size() != 1){
            response.status(404);
            return  "Not found";
        }
        return RethinkDB.getInstance().objectToJson(countryAspect.get(0));
    }
}
