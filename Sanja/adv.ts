class vehicles {
    brand: string;
    model: string;
    img: string;
    year: number;
    weight: number;
    eAuto: boolean;
    constructor(brand: string,
        model: string,
        img: string,
        year: number,
        weight: number,
        eAuto: boolean){
            this.brand = brand;
            this.model = model;
            this.img = img;
            this.year = year;
            this.weight = weight;
            this.eAuto = eAuto;
            // carGroup.push(this);
        }}

        class motorbike extends vehicles{
            type: string;
            trunk: string;
            maxSpeed: number;
            constructor(
                brand: string,
                model: string,
                img: string,
                year: number,
                weight: number,
                eAuto: boolean,
                type: string,
                trunk: string,
                maxSpeed: number){
                    super(brand,model,img,year,weight,eAuto)
                    this.type = type;
                    this.trunk = trunk;
                    this.maxSpeed = maxSpeed;
                }
            }
            class trucks extends vehicles{
                fuelType: string;
                numberOfSeats: number;
            
                constructor(
                    brand: string,
                    model: string,
                    img: string,
                    year: number,
                    weight: number,
                    eAuto: boolean,
                    // type: string,
                    // trunk: string,
                    // maxSpeed: number,
                    fuelType: string,
                    numberOfSeats:number){
                        super(brand,model,img,year,weight,eAuto)
                        this.fuelType=fuelType;
                        this.numberOfSeats=numberOfSeats;
                    }
                }
        