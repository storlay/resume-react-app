/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESUME_URL_RU: string;
  readonly VITE_RESUME_URL_EN: string;
  readonly VITE_RECOMMENDATION_LETTER_WDS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
