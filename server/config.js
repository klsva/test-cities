import fs from 'fs';
import dotenv from 'dotenv';

const configPath = '.env';

if (process.env.NODE_ENV === 'dev'){
  const buffer = fs.readFileSync(configPath);
  const config = dotenv.parse(buffer);
  for (const key in config) {
    process.env[key] = config[key];
  }
}
export const PORT = process.env.PORT;
