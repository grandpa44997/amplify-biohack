
/*
TODO: extract the originaltime value and send it to Notion
labels interface (filtered labels that contain `originaltime-`): 
[
  {
    "color": "5C19CB",
    "default": false,
    "description": "",
    "id": 6666571227,
    "name": "originaltime-4000",
    "node_id": "LA_kwDOG0x5L88AAAABjVvN2w",
    "url": "https://api.github.com/repos/OpenSourceFellows/amplify/labels/originaltime-4000"
  }
]
*/

const labels = process.env.LABELS
const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID
console.log('Send time (labels): ', labels)
console.log('NOTION_TOKEN: ', labels)
console.log('NOTION_DATABASE_ID: ', labels)
