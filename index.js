require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
    "login": "meanshuraj",
    "id": 97393829,
    "node_id": "U_kgDOBc4cpQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/97393829?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/meanshuraj",
    "html_url": "https://github.com/meanshuraj",
    "followers_url": "https://api.github.com/users/meanshuraj/followers",
    "following_url": "https://api.github.com/users/meanshuraj/following{/other_user}",
    "gists_url": "https://api.github.com/users/meanshuraj/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/meanshuraj/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/meanshuraj/subscriptions",
    "organizations_url": "https://api.github.com/users/meanshuraj/orgs",
    "repos_url": "https://api.github.com/users/meanshuraj/repos",
    "events_url": "https://api.github.com/users/meanshuraj/events{/privacy}",
    "received_events_url": "https://api.github.com/users/meanshuraj/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 5,
    "created_at": "2022-01-09T13:52:25Z",
    "updated_at": "2023-12-18T17:13:52Z"
  };

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('anshu@gmail.com');
})

app.get('/login',(req,res)=>{
    res.send('<h1> Please login at chai aur Code</h1>');
})
app.get('/githubData',(req,res)=>{
    res.json(githubData);
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})
app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})
