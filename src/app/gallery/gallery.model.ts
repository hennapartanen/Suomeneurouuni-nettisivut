import { Tuote } from "../shared/tuote.model";

export class Item {
    public name: string;
    public imagePath: string;
    public tuotteet: Tuote[];
  
  
    constructor(name: string, imagePath: string, tuotteet: Tuote[]) {
      this.name = name;
      this.imagePath = imagePath;
      this.tuotteet = tuotteet;
    }
  }
  