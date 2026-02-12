Real‑Time Voting System
A full‑stack polling application that captures yes/no votes with a required name, persists them to MySQL using Prisma (<5.0.0), and visualizes results with React, Vite, and Chart.js.

🚀 Overview
Collect votes (every vote must include name and choice).
Store votes in a MySQL database via Prisma ORM.
Provide REST endpoints for:
Raw logs
Aggregated totals
Time series (for charts)
Visualize results with React + Chart.js.
Choice mapping:

"yes" → true
"no" → false
🛠 Tech Stack
Frontend: React, Vite, Chart.js, react-chartjs-2, Fetch API
Backend: Node.js, Express, Prisma ORM (<5.0.0 recommended 4.x)
Database: MySQL

Prerequisites:

Node.js v16 or v18 (LTS recommended)
npm
MySQL server with credentials
npx (for Prisma commands)
⚙️ Setup and Run
Backend
cd BackendPolling
npm install
npm install @prisma/client@4.15.0
npm install prisma@4.15.0 --save-dev
Create .env in BackendPolling/:

DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=5000
Run migrations and generate client:

npx prisma migrate dev --name init
npx prisma generate
Start backend:

npm start
Backend base URL: http://localhost:5000

Frontend
cd frontend
npm install
npm run dev
Frontend dev URL: commonly http://localhost:5173

📑 Prisma Schema
prisma/schema.prisma

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Vote {
  id        Int      @id @default(autoincrement())
  name      String
  choice    Boolean
  createdAt DateTime @default(now())
}
Response Examples
POST /vote/create

{ "success": true, "vote": { "id":1, "name":"Alice", "choice":true, "createdAt":"2026-02-12T..." } }
GET /vote/overall

{ "yes": 10, "no": 5 }
GET /vote/over-time

[ { "date":"2026-02-12", "yes":3, "no":1 } ]
GET /vote/read

[ { "id":1, "name":"Bob", "choice":true, "createdAt":"2026-02-12T..." } ]
📂 Codebase Structure
Backend

src/config/prisma.js — initializes Prisma client
src/controller/voteController.js — vote logic (create, overall, overTime, read)
src/routes/voteRouter.js — maps routes to controllers
src/index.js — Express setup, JSON parsing, CORS, routes
Frontend

src/component/VoteForm.jsx — collects name & choice, posts to /vote/create
src/component/ViewCharts.jsx — fetches /vote/overall & /vote/over-time, renders charts
src/component/ViewVote.jsx — fetches /vote/read, displays history
🛠 Troubleshooting
Confirm .env exists and DATABASE_URL is correct.
Ensure MySQL is running and accessible.
If migrations fail:
npx prisma migrate reset
npx prisma migrate dev --name init
For CORS issues: ensure backend uses cors middleware.
📚 References
Prisma Docs (v4.x)
MySQL Docs
React Docs
Vite Docs
Chart.js Docs
react-chartjs-2 Docs (react-chartjs-2.js.org in Bing) (bing.com in Bing)
Express Docs
📦 Backend package.json snippet
{
  "dependencies": {
    "@prisma/client": "4.15.0",
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "prisma": "4.15.0"
  }
}
Install commands:

npm install @prisma/client@4.15.0 express cors
npm install prisma@4.15.0 --save-dev
