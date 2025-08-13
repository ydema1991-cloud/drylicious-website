# if you haven't already
git init
git add .
git commit -m "Initial commit from CodeSandbox"

# connect to your GitHub repo (paste your repo URL)
git remote add origin https://github.com/ydema1991-cloud/drylicious-website.git

# fetch the README that exists on GitHub and place your work on top
git pull --rebase origin main

# now upload everything
git push -u origin main
