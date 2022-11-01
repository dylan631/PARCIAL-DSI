import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/demo/service/country.service';

@Component({
    templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {

    countries: any[] = [];

    distritos: any[] = [];

    cities: any[];

    filteredCountries: any[] = [];
    filteredDistritos: any[] = [];
    selectedCountryAdvanced: any[] = [];
    selectedDistritoAdvanced: any[] = [];

    value1: any;

    value2: any;

    value3: any;

    value4: any;

    value5: any;

    value6: any;

    value7: any;

    value8: any;

    value9: any;

    value10: any;

    value11: any;

    value12: any;

    constructor(private countryService: CountryService) {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    ngOnInit() {
        this.countryService.getCountries().then(countries => {
            this.countries = countries;
        });
        this.countryService.getDistrito().then(distritos => {
            this.distritos = distritos;
        });
    }

    filterCountry(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    filterDistrito(event: any) {
        const filtered: any[] = [];
        const query = event.query;
        for (let i = 0; i < this.distritos.length; i++) {
            const distrito = this.distritos[i];
            if (distrito.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(distrito);
            }
        }

        this.filteredDistritos = filtered;
    }

    searchCountry(event: any) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.countries.length; i++) {
            const country = this.countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }

    searchDistrito(event: any) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        const filtered: any[] = [];
        const query = event.query;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.distritos.length; i++) {
            const distrito = this.distritos[i];
            if (distrito.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(distrito);
            }
        }

        this.filteredDistritos = filtered;
    }

}
