/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryFeature {
    private String title;
    private Double value;

    public CountryFeature(String title, Double value) {
        this.title = title;
        this.value = value;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}
