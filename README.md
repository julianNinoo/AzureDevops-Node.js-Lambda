# AzureDevops-Node.js-Lambda

En este proyecto se despliega una app hecha en node.js a una lambda de AWS por medio de Azure Devops.

El pipeline consta con analisis de código estatico, escaneo de dependencias y una prueba unitaria la cual se encuentra en el archivo handler.test.js

En las variables de Azure se deben de ingresar lo siguiente: 

-  AWS_ACCESS_KEY : para el usuario de IAM creado anteriormente.
-  AWS_SECRET_KEY : para el usuario de IAM creado anteriormente.
-  AWS_ROLE : el ARN del rol creado anteriormente. Esto se puede ubicar en AWS navegando a IAM -> Roles, seleccionando el rol recién creado y copiando el ARN del rol.
-  AWS_REGION : el nombre de la región donde creó Lambda.
-  AWS_LAMBDA_FUNCTION_NAME : el nombre de Lambda.
