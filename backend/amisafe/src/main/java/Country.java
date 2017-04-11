import java.util.HashMap;

/**
 * Created by meltingice on 11-Apr-17.
 */
public class Country {
    private String iso;
    private String name;

    public Country(HashMap data) {
        this.iso = (String)data.get("iso");
        this.name = (String)data.get("name");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIso() {
        return iso;
    }

    public void setIso(String iso) {
        this.iso = iso;
    }
}
