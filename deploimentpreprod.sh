git add *

git commit -m "Nouveau deploiment preprod"

ssh -p 65002 u558905572@145.14.151.201 'rm public_html/css/* public_html/stye.css public_html/js/* public_html/img/* public_html/index.html'

yarn build

scp -r  -P 65002 dist/* u558905572@145.14.151.201:public_html/cv/


