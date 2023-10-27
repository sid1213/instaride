declare namespace NodeJS {
  interface Process extends NodeJS.Process {
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    // Add more environment variables here
  }
}
