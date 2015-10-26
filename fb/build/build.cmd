xcopy C:\Users\vkreal\Desktop\breakit\js_web\MainOverrides.js C:\Users\vkreal\Desktop\breakit\js\MainOverrides.js /y
xcopy C:\Users\vkreal\Desktop\breakit\Levels.js C:\Users\vkreal\Desktop\breakit\js\Levels.js /y
cd C:\Users\vkreal\Desktop\breakit\build
z.py "C:\Users\vkreal\Desktop\breakit\js"
java -jar compiler.jar --js temp-prod.js > compiled-web.js
DEL /Q temp-prod.js

xcopy C:\Users\vkreal\Desktop\breakit\js_chrome\MainOverrides.js C:\Users\vkreal\Desktop\breakit\js\MainOverrides.js /y
xcopy C:\Users\vkreal\Desktop\breakit\js_chrome\Levels.js C:\Users\vkreal\Desktop\breakit\js\Levels.js /y
cd C:\Users\vkreal\Desktop\breakit\build
z.py "C:\Users\vkreal\Desktop\breakit\js"
java -jar compiler.jar --js temp-prod.js > compiled-chrome.js
DEL /Q temp-prod.js