import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-result',
  templateUrl: './car-result.component.html',
  styleUrls: ['./car-result.component.css']
})
export class CarResultComponent implements OnInit {

  products: any[] = [
    {
        id: '1',
        name: 'Carro econômico com ar 1',
        urlImage: 'assets/images/eco-hertz.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
        {id: '1',name:'4 portas', iconName:'icovehicle',product: this},
        {id: '2',name:'Ar-condicionado', iconName:'icoair',product: this},
        {id: '3',name:'Vidro elétrico', iconName:'icoglass',product: this},
        {id: '4',name:'5 pessoas', iconName:'icoperson',product: this},
        {id: '5',name:'Automático', iconName:'icoauto',product: this},
        {id: '6',name:'CD ou USB', iconName:'icocd',product: this},
        {id: '7',name:'3 malas', iconName:'icobag',product: this},
        {id: '8',name:'Direção hidráulica', iconName:'icopilot',product: this},
        {id: '9',name:'Rádio AM/FM', iconName:'icoradio',product: this},
        ],
        price: 938,
        discount: 20,
        currence: 'Real',
        isFavorite: true,
        hasDetail: true
    },
    {
        id: '2',
        name: 'Carro econômico com ar 2',
        urlImage: 'assets/images/eco-budget.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
        {id: '1',name:'4 portas', iconName:'icovehicle',product: this},
        {id: '2',name:'Ar-condicionado', iconName:'icoair',product: this},
        {id: '4',name:'5 pessoas', iconName:'icoperson',product: this},
        {id: '5',name:'Automático', iconName:'icoauto',product: this},
        {id: '7',name:'3 malas', iconName:'icobag',product: this},
        ],
        price: 1200,
        discount: 0,
        currence: 'Real',
        isFavorite: false,
        hasDetail: false
    },
    {
        id: '3',
        name: 'Carro econômico com ar 3',
        urlImage: 'assets/images/eco-budget.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
        {id: '1',name:'4 portas', iconName:'icovehicle',product: this},
        {id: '2',name:'Ar-condicionado', iconName:'icoair',product: this},
        {id: '4',name:'5 pessoas', iconName:'icoperson',product: this},
        {id: '5',name:'Automático', iconName:'icoauto',product: this},
        {id: '7',name:'3 malas', iconName:'icobag',product: this},
        ],
        price: 436,
        discount: 10,
        currence: 'Real',
        isFavorite: true,
        hasDetail: false
    },
    {
        id: '4',
        name: 'Carro econômico 4',
        urlImage: 'assets/images/eco-hertz.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
            {id: '1',name:'2 portas', iconName:'icovehicle',product: this},
            {id: '6',name:'CD ou USB', iconName:'icocd',product: this},
            {id: '9',name:'Rádio AM/FM', iconName:'icoradio',product: this},
        ],
        price: 535,
        discount: 30,
        currence: 'Real',
        isFavorite: true,
        hasDetail: false
    },
     {
        id: '5',
        name: 'Carro econômico 5',
        urlImage: 'assets/images/eco-hertz.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
            {id: '1',name:'2 portas', iconName:'icovehicle',product: this},
            {id: '6',name:'CD ou USB', iconName:'icocd',product: this},
            {id: '9',name:'Rádio AM/FM', iconName:'icoradio',product: this},
        ],
        price: 2300,
        discount: 0,
        currence: 'Real',
        isFavorite: true,
        hasDetail: false
    },
     {
        id: '6',
        name: 'Carro econômico 6',
        urlImage: 'assets/images/eco-hertz.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
            {id: '1',name:'2 portas', iconName:'icovehicle',product: this},
            {id: '6',name:'CD ou USB', iconName:'icocd',product: this},
            {id: '9',name:'Rádio AM/FM', iconName:'icoradio',product: this},
        ],
        price: 1450,
        discount: 30,
        currence: 'Real',
        isFavorite: false,
        hasDetail: false
    },
     {
        id: '7',
        name: 'Carro econômico 7',
        urlImage: 'assets/images/eco-hertz.jpg',
        taxcode: 'IFMR',
        vehicles: 'Chevrolet Celta, Ford Fiesta, VW Golf, Fiat Palio ou Similar',
        description:['- Quilometragem livre','- Seguro total do veículo','- Seguro a terceiros','- Taxas de serviços inclusas'],
        details: 'Super inclusive promocional - km livre, seguro total do veículo (LDW), seguro à terceiros (SLI), taxas de serviços inclusas e 1 motorista adicional',
        serialitems: [
            {id: '1',name:'2 portas', iconName:'icovehicle',product: this},
            {id: '6',name:'CD ou USB', iconName:'icocd',product: this},
            {id: '9',name:'Rádio AM/FM', iconName:'icoradio',product: this},
        ],
        price: 1670,
        discount: 30,
        currence: 'Real',
        isFavorite: true,
        hasDetail: false
    }]

  constructor() { }

  ngOnInit() {
  }

}
