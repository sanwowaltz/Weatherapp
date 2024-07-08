class Forecast{
    constructor(){
        this.key = 'cGn1HMA2q8OVy6Nll71lMerhPMvX3Frj'
        this.weaatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/'
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    }

    async updateStat(city){
        const cityDet = await this.getCity(city);
        const weather = await this.getWeather(cityDet.Key);
        return{cityDet, weather}
    }

async getCity(city){
    const query = `?apikey=${this.key}&q=${city}`
    const response = await fetch(this.cityURI+ query)
    const data = await response.json();
    
    return data[0];
}

async getWeather(id){
    const query =`${id}?apikey=${this.key}`
    const response = await fetch (this.weaatherURI + query)
    const data = await response.json()
    
    return data[0]
}
}


