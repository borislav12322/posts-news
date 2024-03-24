import * as process from "process";

export const apiConfig = {
  base_url: process.env["MAIN_URL"] || "https://jsonplaceholder.typicode.com",
};
