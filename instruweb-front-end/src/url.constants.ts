import {HttpHeaders} from "@angular/common/http";

export const API_HEADERS = {
  headers: new HttpHeaders(
    {
      'Authorization': 'Basic ' + btoa('Nickwelles:ditiseenwachtwoord'),
      'Content-Type': 'application/json'
    }
  )
};

