import java.util.HashMap;
import java.util.List;

/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryData {
    private String country;
    private int rank;
    private List<HashMap> aspects;

    public CountryData(String country, int rank, List<HashMap> aspects) {
        this.country = country;
        this.rank = rank;
        this.aspects = aspects;
    }

    public List<HashMap> getAspects() {
        return aspects;
    }

    public void setAspects(List<HashMap> aspects) {
        this.aspects = aspects;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }
}
