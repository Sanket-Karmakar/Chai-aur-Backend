require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "Sanket-Karmakar",
    "id": 145656330,
    "node_id": "U_kgDOCK6KCg",
    "avatar_url": "https://avatars.githubusercontent.com/u/145656330?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sanket-Karmakar",
    "html_url": "https://github.com/Sanket-Karmakar",
    "followers_url": "https://api.github.com/users/Sanket-Karmakar/followers",
    "following_url": "https://api.github.com/users/Sanket-Karmakar/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sanket-Karmakar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sanket-Karmakar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sanket-Karmakar/subscriptions",
    "organizations_url": "https://api.github.com/users/Sanket-Karmakar/orgs",
    "repos_url": "https://api.github.com/users/Sanket-Karmakar/repos",
    "events_url": "https://api.github.com/users/Sanket-Karmakar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sanket-Karmakar/received_events",
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
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-21T08:23:05Z",
    "updated_at": "2025-04-03T04:46:21Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Sanket Karmakar!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login or Sign Up</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Chai aur Code - Hitesh Choudhary</h1>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

