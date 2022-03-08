
ssh -p 65002 u558905572@145.14.151.201 'rm public_html/cv/css/* public_html/cv/stye.css public_html/cv/js/* public_html/cv/img/* public_html/cv/index.html'

yarn build

scp -r  -P 65002 dist/* u558905572@145.14.151.201:public_html/cv/


