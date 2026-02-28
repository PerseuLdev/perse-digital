import { MercadoPagoConfig, Preference } from 'mercadopago';

let _client: MercadoPagoConfig | null = null;

export function getMPClient(): MercadoPagoConfig {
  if (!_client) {
    _client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN! });
  }
  return _client;
}

export function getMPPreference(): Preference {
  return new Preference(getMPClient());
}
