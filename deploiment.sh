#	ssh -p 65002 u558905572@145.14.151.201

# cd rm css/* rm js/* rm img/* rm index.html rm stye.css


yarn build

scp -r  -P 65002 dist/* u558905572@145.14.151.201:public_html/


