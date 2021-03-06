FROM gitpod/workspace-full:latest

USER root
# typescript
RUN npm install -g npm-check-updates typescript ts-node ts-node-dev express @types/node @types/express
# Setup Heroku CLI
RUN curl https://cli-assets.heroku.com/install.sh | sh
RUN chown -R gitpod:gitpod /home/gitpod/.cache/heroku
# Setup vercel
RUN npm install -g vercel
# Setup netlify
RUN npm install -g netlify-cli
