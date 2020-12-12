interface IResourceList {
  count: number;
  next: string;
  previous: boolean;
  results?: Array<IAPIResource>;
}

interface IPokeObject {
  id: number;
  name: string;
}

interface IAPIResource {
  name: string;
  url: string;
}

interface IBerry extends IPokeObject {
  growth_type?: number;
  max_harvest?: number;
  natural_gift_power?: number;
  size?: number;
  smoothness?: number;
  soil_dryness?: number;
  firmness?: IAPIResource;
  flavors?: Array<{
    potency: string;
    IAPIResource;
  }>;
  item?: IAPIResource;
  natural_gift_type?: IAPIResource;
}
