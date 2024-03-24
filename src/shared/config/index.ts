import * as process from "process";

// Конфигурация для запросов на сервер
export const apiConfig = {
  base_url: process.env["MAIN_URL"] || "https://jsonplaceholder.typicode.com",
};
