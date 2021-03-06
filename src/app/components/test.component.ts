import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-test',
  templateUrl: '../html/test.component.html',
  styleUrls: [ '../css/test.component.css' ]
 })

export class TestComponent {

 clickMessage = '';

  constructor(private http: HttpClient, private http2: HttpClient) { }

//  urlString = 'http://preproduccion.travelnet.com.mx/package/api/method/availabilityHotel';
//  urlStringSession = 'http://preproduccion.travelnet.com.mx/package/api/method/sessionConfiguration';
  
  urlString = 'http://localhost/tnw/html/package/api/method/availabilityHotel';
  urlStringSession = 'http://localhost/tnw/html/package/api/method/sessionConfiguration';
  
  values = '';

  onKey(event: any) { // without type info
    this.values = event.target.value;
  }


  onClickMe() {

    const body = {
      'prid' : '014',
      'values' : this.values,
      'from': {
        'citycode': 'CBR',
        'cityname': 'Canberra',
        'countrycode': 'AU',
        'airport_code': 'CBR',
        'airport_name': 'Canberra Arpt',
        'airport_country_code': 'AU'
      },
      'to': {
        'citycode': 'CUN',
        'cityname': 'Cancún',
        'countrycode': 'MX',
        'airport_code': 'CUN',
        'airport_name': 'Cancun Aeropuerto Internacional',
        'airport_country_code': 'MX'
      },
      'startDate': '2017-10-20',
      'endDate': '2017-10-25',
      'currency': 'MXN',
      'rooms': {
        '1' : {
          'adults': '2',
          'childs': {
            '1' : {
              'age': '2',
              'onSeat': false,
              'childNumber': 1
            },
            '2' : {
              'age': '0',
              'onSeat': true,
              'childNumber': 2
              }
            }
        },
        '2' : {
          'adults': '2',
          'childs': {
              '1' : {
                'age': '8',
                'onSeat': false,
                'childNumber': 1
                  },
                '2' : {
                'age': '1',
                'onSeat': true,
                'childNumber': 2
                  }
                }
            }
          }
      };

    this.clickMessage = body.from.cityname;

    this.http.post( this.urlString, body  ).subscribe( data => {
      console.log( data );
    });


//    this.http2.post( this.urlStringSession , body).subscribe( data => {
//      console.log( data );
//    });

  }
}
