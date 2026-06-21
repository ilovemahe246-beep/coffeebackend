require('dotenv').config()
const express = require('express');
const app = express()

const port = 4000
const githubData = {
    
  "login": "ilovemahe246-beep",
  "id": 255889697,
  "node_id": "U_kgDOD0CRIQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/255889697?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ilovemahe246-beep",
  "html_url": "https://github.com/ilovemahe246-beep",
  "followers_url": "https://api.github.com/users/ilovemahe246-beep/followers",
  "following_url": "https://api.github.com/users/ilovemahe246-beep/following{/other_user}",
  "gists_url": "https://api.github.com/users/ilovemahe246-beep/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ilovemahe246-beep/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ilovemahe246-beep/subscriptions",
  "organizations_url": "https://api.github.com/users/ilovemahe246-beep/orgs",
  "repos_url": "https://api.github.com/users/ilovemahe246-beep/repos",
  "events_url": "https://api.github.com/users/ilovemahe246-beep/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ilovemahe246-beep/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2026-01-19T13:35:04Z",
  "updated_at": "2026-01-19T13:35:04Z"

}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/insta', (req, res) => {
  res.send('bruh_maheeexx!')
})
app.get('/login', (req, res) => {
  res.send('<h1>please login at chai and code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>chai aur code</h2>')
})
app.get('/github', (req, res) => {
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
