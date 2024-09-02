import { ISignin } from "@/utils/auth";

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
      const route = `/api/v1/auth/signin`
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

};

export default new Api()
