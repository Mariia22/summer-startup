/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOGIN: string;
  readonly VITE_PASSWORD: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_CLIENT_SECRET: string;
  readonly VITE__HEADER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
