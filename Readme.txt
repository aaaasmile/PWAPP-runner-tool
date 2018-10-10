== Provare la app
In questa di si lancia un webserver.
Ruby non ha nessuna dipendenza con dei pacchetti. Viene solo usato come server.
$env:path += "D:\ruby\ruby_2_3_1\bin"
ruby -run -e httpd . -p 9090

Url nel browser: http://localhost:9090/app/index.html

== Sviluppo
Quando si modificano i sorgenti, per ogni deploy va fatto un aggiornamento della versione della cache che si trova in sw.js.
Uso il formato yyy.mm.dd.001 per incrementare la sua versione usando la data.Sulla stessa data uso 001, 002 e così via.
Durante lo sviluppo e test si fa senza cambiare continuamente la versione della cache, ma va fatto un Unregister della url che si testa usando
chrome://serviceworker-internals/. Il cambio della versione della cache va fatto una sola volta.

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

== Deploy corsa.invido.it
Ho fatto anche un deploy su corsa.invido.it. Vedi il readme di hetzner per maggiori informazioni.
Basta un semplice git pull per aggiornare la repository su invido.it.

== Altre informazioni
Le trovi nel file D:\scratch\caterpillar\Readme.txt
