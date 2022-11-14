import {HttpHeaders} from "@angular/common/http";

export const API_HEADERS = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      Authorization: ''
    }
  )
};

