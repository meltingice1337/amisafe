/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryData {
    private String country;
    private int rank;
    private CountryAspect[] aspects;

    public CountryData(String country, int rank, CountryAspect[] aspects) {
        this.country = country;
        this.rank = rank;
        this.aspects = aspects;
    }

    public CountryAspect[] getAspects() {
        return aspects;
    }

    public void setAspects(CountryAspect[] aspects) {
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
