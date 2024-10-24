# DEPLOYMENT
# TASKS

## SOURAV
> Add a section on the root page which will show all of our available apps
> 12.5%

>> Nextjs Docs on Layout (APP ROUTER)



# FRONTEND 

> Deployed on VERCEL

- src
    - app
        - apps/
            - /weather
            - /youtube-comment-scraper
            - /insta-profile-scraper
        / (ROOT page)
        <APPS/>

# BACKEND (DJANGO)

> Deployed on EC2 with NGINX
- apps 
    - rapid-apis (app) {PORT: 8000} 
        - (weather)
           - model.py
           - view.py
    - pdf (app) {PORT: 8001}
        - compress_pdf
           - model.py
           - view.py
        - transform_pdf
           - model.py
           - view.py
