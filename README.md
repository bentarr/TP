### Web_Service_Epsi : Install sous Windows Meteor + Mise en route

```
--> PowerShell admin

--> Rentrer la commande (install chocolotey)  : Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

-->Taper "choco" pour voir si chocolatey est installé 
( retourne la version de choco ) 

--> Rentrer la commande : choco install meteor

--> une fois placé dans le dossier acceuillant le projet, lancer un "meteor create myapp"

--> Une fois le projet crée, lancer un "meteor" dans le dossier du projet, ici "myapp"
```
