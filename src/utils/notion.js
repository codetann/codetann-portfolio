import { Client } from "@notionhq/client";

// set up notion db
const notion = new Client({ auth: process.env.REACT_APP_API_KEY });

export async function getDatabase() {
  const response = await notion.databases.retrieve({
    database_id: process.env.REACT_APP_DATABASE_ID,
  });

  console.log(response);
}
