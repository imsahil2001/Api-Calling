import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'apiCalling';
  responseApi: any = {
    firstname: '',
    mobilenumber: '',
    middlename: '',
    lastname: '',
    pan: '',
    fathername: '',
    dob: '',
    emailid: '',
    gender: '',
    pincode: '',
    city: '',
    state: '',
    appid: '',
    webtopid: '',
    leadid: 0,
  };

  resultString: String = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  baseUrl: string =
    'http://localhost:8080/tclplcontroller/customer/services/createLead';

  emotions: any[] = ['happy', 'sad', 'angry'];

  myForm = this.fb.group({
    firstname: ['DILBAHAR'],
    mobilenumber: ['9856985698'],
    middlename: ['SINGH'],
    lastname: ['ARORA'],
    pan: ['AZEPD6246N'],
    fathername: ['Subrahmanya Sharma'],
    dob: ['01-06-2001'],
    emailid: ['ramashankar.darivemula@jocata.com'],
    gender: ['M'],
    pincode: ['500043'],
    city: ['HYDERABAD'],
    state: ['Telangana'],
  });

  // JSON.stringify(this.myForm.value);

  onSubmit() {
    console.log(this.myForm.value);
    // window.alert(this.myForm.value.toString());
    this.http
      .post<any>(this.baseUrl, JSON.stringify(this.myForm.value), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe({
        next: (response) => {
          console.log(response);
          this.responseApi = response;
          this.resultString =
            'Congo!!.. User has been created... Following are the credentials of the same..';
        },
        error: (error) => console.log(error),
      });
  }
}
