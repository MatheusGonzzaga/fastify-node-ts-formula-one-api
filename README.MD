# Formula One API

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)   ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)   ![Fastify](https://img.shields.io/badge/Fastify-000000?style=flat&logo=fastify&logoColor=white)

## Overview

This is a quick study project built with **Node.js**, **TypeScript**, and the minimalist backend framework **Fastify**. The goal was to experiment with building a **minimal API** as fast as possible, using just a **single file (`server.ts`)**, without any folder structure or complex setup.

It serves as an exploration into rapid backend prototyping with TypeScript.

---

## Features

- Extremely minimal and fast to build  
- Built using [Fastify](https://www.fastify.io/)  
- Entire application contained in a single `server.ts` file  
- TypeScript support for a safer coding experience  
- CORS enabled to allow cross-origin requests  
- Basic endpoints to serve data on teams and drivers  

---

## Technologies Used

- [Node.js](https://nodejs.org/)  
  A JavaScript runtime built on Chrome's V8 engine, used here to run the backend server.

- [TypeScript](https://www.typescriptlang.org/)  
  A superset of JavaScript that adds static typing, improving code quality and maintainability.

- [Fastify](https://www.fastify.io/)  
  A fast and low-overhead web framework for Node.js, ideal for building efficient APIs.

- [@fastify/cors](https://github.com/fastify/fastify-cors)  
  A plugin to enable Cross-Origin Resource Sharing (CORS), allowing the API to be accessed from different domains.

---

## How to Use?

1. **Clone the repository**  
   `git clone https://github.com/MatheusGonzzaga/fastify-node-ts-formula-one-api.git`

2. **Install the dependencies**  
   `npm install`

3. **Start the server**  
   `npm run start:dev` or `npm run start:watch`

4. **Access the API**  
   The server runs on `http://localhost:3333`

---

## API Endpoints

| Method | Endpoint         | Description                          | Response Example                                  |
| ------ | ---------------- | ---------------------------------- | ------------------------------------------------- |
| GET    | `/teams`         | Returns a list of Formula One teams | `{ teams: [{ id, name, base }, ...] }`            |
| GET    | `/drivers`       | Returns a list of drivers           | `{ drivers: [{ id, name, team }, ...] }`           |
| GET    | `/driver/:id`    | Returns details of a specific driver by ID | `{ driver: { id, name, team } }` or `{ message: "Driver Not Found" }` |

---

## Notes

- The API uses **CORS** with wildcard (`*`) origin to allow requests from any domain, useful for frontend integration and testing.  
- The project is designed for rapid prototyping and learning purposes, focusing on simplicity and speed.  
- The driver and team data are currently hardcoded arrays for demonstration and testing. Future enhancements could include database integration and CRUD operations.

---

## Why This Approach?

The purpose of this project was to explore **how quickly and simply** an API can be built using modern tooling like **Fastify**, while still leveraging TypeScript. It strips away architecture, folders, and abstractions to focus on **speed of development** and **clarity**.
