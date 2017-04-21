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
class CountryController {
    private CountryDAO countryDAO;

    CountryController(CountryDAO countryDAO)
    {
        this.countryDAO = countryDAO;
    }

    public String getCountryData(Request request, Response response) {
        String iso  = request.params(":iso");

        Country country = countryDAO.getCountry(iso.toUpperCase());
        if(country == null)
        {
            response.status(404);
            return "Not Found";
        }
        CountryData countryData = countryDAO.getCountryData(country.getName());

        return RethinkDB.getInstance().objectToJson(countryData);
    }

    public String getAllCountries(Request request, Response response) {
        List countries = countryDAO.getAllCountries();
        return RethinkDB.getInstance().objectToJson(countries);
    }

    public String getAspect(Request request, Response response) {
        String aspect = request.params(":aspect");
        HashMap countryAspect = countryDAO.getAspect(aspect);
        if(countryAspect == null){
            response.status(404);
            return  "Not found";
        }
        return RethinkDB.getInstance().objectToJson(countryAspect);
    }
}
