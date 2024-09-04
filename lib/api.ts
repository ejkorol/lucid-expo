import { ISignin, ISignup } from "@/utils/auth";

class Api {
  private apiUrl: string;
  
  constructor() {
    this.apiUrl = process.env.EXPO_PUBLIC_API_URL as string;
  };

  private async fetchFromApi(endpoint: string, options: RequestInit) {
    try {
      const res = await fetch(`${this.apiUrl}${endpoint}`, options);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`)
      };

      return res.json();
    } catch(e) {
      console.error(`API call failed: ${e}`);
      throw e;
    };
  };

  public async signin(credentials: ISignin): Promise<string | null> {
    try {
      const route = `/api/v1/auth/signin`;
      const data = await this.fetchFromApi(route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      });

      return data || null;
    } catch(e) {
      console.error(`Sign-in failed: ${e}`);
      return null;
    };
  };

  public async signup(credentials: ISignup): Promise<string | null> {
    try {
      const route = `/api/v1/auth/signup`;
      const data = await this.fetchFromApi(route, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: credentials.username,
          email: credentials.email,
          first_name: credentials.firstName,
          last_name: credentials.lastName,
          password: credentials.password,
          mbti: credentials.mbti,
          dob_date: credentials.dobDate,
          dob_time: credentials.dobTime,
          dob_location: credentials.dobLocation
        })
      });

      return data || null;
    } catch(e) {
      console.error(`Sign-up failed: ${e}`);
      return null;
    };
  };

  public async verify(credentials: string): Promise<IVerify | null> {
    try {
      const route = `/api/v1/auth/verify/${credentials}`;
      const data = await this.fetchFromApi(route, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' }
      });

      return data || null;
    } catch(e) {
      console.error(`Verify failed: ${e}`);
      return null;
    };
  };

  public async getMbtis(): Promise<IMbti[] | null> {
    try {
      const route = `/api/v1/mbti`;
      const data = await this.fetchFromApi(route, {
        method: "GET"
      });

      return data || null;
    } catch(e) {
      console.error(`Failed to get MBTIs: ${e}`)
      return null;
    };
  };

  public async getCountries(): Promise<ICountry[] | null> {
    try {
      const route = `/api/v1/locations/countries`;
      const data = await this.fetchFromApi(route, {
        method: "GET"
      });

      return data;
    } catch(e) {
      console.error(`Failed to get countries: ${e}`);
      return null;
    };
  };

  public async getStates(countryCode: string): Promise<IState[] | null> {
    try {
      const route = `/api/v1/locations/states/${countryCode}`;
      const data = await this.fetchFromApi(route, {
        method: "GET"
      });

      return data;
    } catch(e) {
      console.error(`Failed to get states: ${e}`);
      return null;
    };
  };

  public async getCities(countryCode: string, stateCode: string): Promise<ICity[] | null> {
    try {
      const route = `/api/v1/locations/cities/${countryCode}/${stateCode}`;
      const data = await this.fetchFromApi(route, {
        method: "GET"
      });

      return data;
    } catch(e) {
      console.error(`Failed to get cities: ${e}`);
      return null;
    };
  };

};

interface ICountry {
  value: string;
  displayValue: string;
};

interface IState {
  value: string;
  displayValue: string;
};

interface ICity {
  value: string;
  displayValue: string;
};

interface IVerify {
  status: boolean;
};

interface IMbti {
  id: number;
  type: string;
  archetype: string;
};

export default new Api()
