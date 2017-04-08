/**
 * Created by meltingice on 08-Apr-17.
 */
public class CountryAspect
{
    private String label;
    private String type;
    private CountryFeature[] features;

    public CountryAspect(String label, String type, CountryFeature[] features) {
        this.label = label;
        this.type = type;
        this.features = features;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }
}
