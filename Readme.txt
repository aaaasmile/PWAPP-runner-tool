== Provare la app
In questa di si lancia un webserver.
Ruby non ha nessuna dipendenza con dei pacchetti. Viene solo usato come server.
$env:path += "D:\ruby\ruby_2_3_1\bin"
ruby -run -e httpd . -p 9090

Url nel browser: http://localhost:9090/app/index.html

== Deploy
Con la console linux di windows nella dir root dell'applicazione:
(D:\scratch\caterpillar\converted\pwapp_corsa-tool)

firebase login
(qui si esegue il login nel browser, le credential le vedi nell'altro file)

firebase serve 
(per vedere se l'applicazione funziona)

firebase deploy
(per pubblicarla)

Ora si hanno queste coordinate per l'applicazione deployed:
Project Console: https://console.firebase.google.com/project/runners-tool/overview
Hosting URL: https://runners-tool.firebaseapp.com

== Altre informazioni
Le trovi nel file D:\scratch\caterpillar\Readme.txt
