/* Base Interfaces */
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
interface IFlavorText {
  flavor_text: string;
  language: IAPIResource;
}

/* Berry Interfaces */
interface IBerry extends IPokeObject {
  growth_time?: number;
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

/* Contest Interfaces */
interface IContestTypeName {
  name?: string;
  color?: string;
  language: IAPIResource;
}
interface IContestBaseEffect {
  id: number;
  appeal?: number;
  flavor_text_entries?: IFlavorText[];
}
interface IContestType extends IPokeObject {
  berry_flavor?: IAPIResource;
  names?: IContestTypeName[];
}
interface IContestEffect extends IContestBaseEffect {
  jam?: number;
  effect_entries?: Array<{
    effect: string;
    language: IAPIResource;
  }>;
}
interface ISuperContestEffect extends IContestBaseEffect {
  moves?: IAPIResource;
}
