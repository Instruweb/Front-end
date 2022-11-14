import {HttpHeaders} from "@angular/common/http";
import KeyCloakService from "./app/services/KeyCloak.service";
import keyCloakService from "./app/services/KeyCloak.service";

export const API_HEADERS = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaXzg2UlhKV0ptMmlkVW5rMUg4WkVXQU1zNm4tZ3c5ZTFoVzk2X25OOVFrIn0.eyJleHAiOjE2NjgwMTA5NTMsImlhdCI6MTY2ODAxMDY1MywiYXV0aF90aW1lIjoxNjY4MDEwNjUyLCJqdGkiOiJjNzJmOTRiMi00YmRlLTQ0NTItYjU5Ni1iMWJjZmZiOTFkZjciLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0Ojg0ODQvcmVhbG1zL2luc3RydXdlYiIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYnJva2VyIiwiYmFja2VuZC1zZXJ2aWNlIiwiYWNjb3VudCJdLCJzdWIiOiJhZjEzNGNhYi1mNDFjLTQ2NzUtYjE0MS0yMDVmOTc1ZGI2NzkiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJmcm9udC1lbmQtc2VydmljZSIsIm5vbmNlIjoiMWU3MmIzZGItMzJmZi00ZmJkLTgyNTktY2NhMmQxMmM5NWI5Iiwic2Vzc2lvbl9zdGF0ZSI6Ijg0M2JjZDIxLTZkNjktNDFjYS04NzdkLWRlODhmZWY4YmZkMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiYWRtaW4iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsicmVhbG0tbWFuYWdlbWVudCI6eyJyb2xlcyI6WyJ2aWV3LWlkZW50aXR5LXByb3ZpZGVycyIsInZpZXctcmVhbG0iLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsInJlYWxtLWFkbWluIiwiY3JlYXRlLWNsaWVudCIsIm1hbmFnZS11c2VycyIsInF1ZXJ5LXJlYWxtcyIsInZpZXctYXV0aG9yaXphdGlvbiIsInF1ZXJ5LWNsaWVudHMiLCJxdWVyeS11c2VycyIsIm1hbmFnZS1ldmVudHMiLCJtYW5hZ2UtcmVhbG0iLCJ2aWV3LWV2ZW50cyIsInZpZXctdXNlcnMiLCJ2aWV3LWNsaWVudHMiLCJtYW5hZ2UtYXV0aG9yaXphdGlvbiIsIm1hbmFnZS1jbGllbnRzIiwicXVlcnktZ3JvdXBzIl19LCJicm9rZXIiOnsicm9sZXMiOlsicmVhZC10b2tlbiJdfSwiYmFja2VuZC1zZXJ2aWNlIjp7InJvbGVzIjpbInVtYV9wcm90ZWN0aW9uIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50Iiwidmlldy1hcHBsaWNhdGlvbnMiLCJ2aWV3LWNvbnNlbnQiLCJ2aWV3LWdyb3VwcyIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwiZGVsZXRlLWFjY291bnQiLCJtYW5hZ2UtY29uc2VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiI4NDNiY2QyMS02ZDY5LTQxY2EtODc3ZC1kZTg4ZmVmOGJmZDEiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJOaWNrIFdlbGxlcyIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwiZ2l2ZW5fbmFtZSI6Ik5pY2siLCJmYW1pbHlfbmFtZSI6IldlbGxlcyIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0.UZwbjHhuKqMKkxDhSUUxXnyjwcsLXDz_FR4-IDQaOAlz9xP0ZIN6JuqAgvltkJfw2dLHdhqGK8C2bG_ZoNeVDgb5zhOm_35hmV_FKvTSqHGkv68CKyfc6fTw8-buNooWkiEUXkzvntLWwQ__OsZ39JiFAqyh9tu6kCtHeKoGU3Nj3ZRrJ76k9PX1Ggb31H0aUy5oRdqTLv2X3dhzdqALbQpd-z6Vz70tLZCXyfYRsKTWcR6BpKY8IW0cW1S4eGebO9PF0gi9PyNRikWvEyFSDuhOfL32RXovEm_gR2Kv1Mzy60bVmq4y-nY3KWU6182WaGvcCq3fOnfRyWbmsDr-6g"
    }
  )
};

