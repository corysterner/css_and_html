#!/bin/bash
cd ~
#install node-js
echo "installing nodejs"
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
apt-get install nodejs
echo "installing npm"
sudo apt-get install npm
#install express to make code simpler -g means global
echo "installing express"
sudo npm install express-generator
#configure express to use stylus for css
echo "configuring stylus"
sudo express -c stylus express_example
#install dependencies 
sudo cd express_example && npm install
#run app should see output "listening on port 3000"
#DEBUG=express_example:* npm start
#set up git
#git init
#echo 'node_modules' > .gitignore
#git add 
#git commit -m 'initial commit'
#git clone https://github.com/corysterner/css_and_html
#use nodemon to make it so it doesn't have to restart with change
sudo npm install -g nodemon
#now start app with DEBUG=express_example:* nodemon
