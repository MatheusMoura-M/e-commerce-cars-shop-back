# 💻Motors shop - API

## 🛠️:cloud: Inicialização

* Para conseguir rodar esta API, é preciso fazer algumas configurações previas.

### :one: Primeira etapa

É preciso criar um banco de dados <strong><i>postgresql</i></strong>, onde todos os dados são amarzenados. Então no exemplo abaixo irei utilizar o <a href="https://dbeaver.io/download/">dbeaver</a>. Após abrir o <a href="https://dbeaver.io/download/">dbeaver</a>, você se deparará com está tela:

<div>
  <img src="https://user-images.githubusercontent.com/101361395/226995412-664a41aa-b1dc-4fb0-b078-f78779523222.png"/>
</div>

<p>Você precisará clicar no canto superio esquerdo, onde é mostrado na imagem abaixo, e selecionar o postgresql e avançar.</p>

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227004042-b71d3686-3e26-4625-981c-da0f0cc2467b.png"/>
</div>

<p>Abrirá um outro model de configuração do banco. você precisará prencher o campo <strong>password</strong> com a senha criada na instalção do programa, clicar no botão <strong>Test Connection</strong> e se der tudo certo, pode clicar em <strong>concluir</strong>.</p>

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227006529-8fb5d2fd-442f-4eb2-a45b-2f15be5dbc04.png"/>
</div>

Para criar uma base de dados, você precisará selecionar a opção <strong>SQL</strong> na barra de opções a cima e precisará utilisar um comando SQL demostrado na imagem abaixo.

<div>
  <img src="https://user-images.githubusercontent.com/101361395/227008368-c54b5b76-8cda-42b4-a912-f358b7c2b225.png"/>
</div>

### :two: Segunda etapa

1. **Fazer o clone do repositório neste link:** https://github.com/Leo-neves20/cadastro-de-clientes-express-M6-.git <br>
2. **Abra o terminal e dê o comando "yarn" ou "npm i"** <br>
3. **faça uma copia do arquivo <i>.env.example</i> e preencha com os dados do seu banco postgres.** <br>
<div>
  <img src="https://user-images.githubusercontent.com/101361395/236007588-a2075bc4-8ba8-4847-9b62-cb3eeba98fe5.png"/>
</div>

**O banco, se você não alterou, irá rodar na porta 5432 e no host localhost. Você irá preencher os demais campos com os dados da seu banco**

* **DB_USER** = Esta chave precisa conter o nome <strong>"User"</strong> que há no seu banco.
<div>
  <img src="https://user-images.githubusercontent.com/101361395/227048973-bd2bead7-ca32-4e54-a3e6-57bf9bd36390.png"/>
</div>

* **DB_PASSWORD** = Esta chave precisa conter a senha que você utilizou na criação do banco.

* **DB_HOST** = Por padrão, a chave precisa precisa receber <strong>"localhost"</strong>.

* **DB_PORT** = Por padrão, a chave precisa precisa receber <strong>"5432"</strong>, se a chave da porta não foi alterada na instalação do dbeaver.

* **DB_NAME** = Essa chave precisa conter o nome exato da sua base de dados.

* **SECRET=KEY** = Essa chave precisa conter qualquer valor, só não de ser nula.

após a configuração, é preciso rodar as migrações. utilize o comando:
````
yarn typeorm migration:run -d src/data-source
````

_______________________________________________________________________________________________________________________________________________________________________

## :bullettrain_side: Rotas

### :key: Rotas de Login

* Rota para fazer o login.

**Request:** 
````
{
  email: string,
  password: string
}
````

**Response:** 
````
{
  token: aoZJSJhOpjwQXDWKRtXz3HjucCaC08hw91vFxxswjIMzUNYxFefGoQZ75spo60XjgvCAWSFAtxPjdMnYpkxLH7E63aa2cf042609
}
````

_______________________________________________________________________________________________________________________________________________________________________

### :boy: Rotas de Usuário

🟢 **POST - /user**

* Rota para fazer registro do usuário.

**Request:**
````
{
  "name": string,
  "email": string,
  "telephone": string,
  "password": string,
  "cpf": string,
  "description": string,
  "image_url": string,
  "isSeller": bolean,
  "complement": string,
  "zipcode": string,
  "number": string,
  "street": string,
  "city": string,
  "state": string
}`
````
	
**Response:** 
````
{
  "id": string,
  "name": string,
  "email": string,
  "cpf": string,
  "telephone": string,
  "description": string,
  "birthdate": string,
  "isSeller": bolean,
  "image_url": string,
  "complement": string,
  "zipcode": string,
  "number": string,
  "street": string,
  "city": string,
  "state": string
}
````

### :lock: Rotas que precisam de autenticação

🔵 **GET - /user/profile**

* Lista dados do usuário

**Response:** 
````
{
  "id": string,
  "name": string,
  "email": string,
  "telephone": string,
  "password": string,
  "cpf": string,
  "description": string,
  "image_url": string,
  "isSeller": bolean
}
````

🟡 **PATCH - /user**

 - Atualiza dados do usuário.

**Request:**

````
{
  "name": string,
  "email": string,
  "telephone": string,
  "password": string,
  "cpf": string,
  "description": string,
  "image_url": string,
  "isSeller": bolean
}
````

**Response:** 
````
{
  "id": string,
  "name": string,
  "email": string,
  "telephone": string,
  "password": string,
  "cpf": string,
  "description": string,
  "image_url": string,
  "isSeller": bolean
}
````

🔴 **DELETE - /user**

 - Exclui Usuário

_______________________________________________________________________________________________________________________________________________________________________

### 🏠: Rotas de Endereço

🟡 **PATCH - /user/address**

 - Atualiza endereço do usuário do usuário.

**Request:**

````
{
  "complement": string,
  "zipcode": string,
  "number": string,
  "street": string,
  "city": string,
  "state": string,
}
````

**Response:** 
````
{
  "id": string,
  "complement": string,
  "zipcode": string,
  "number": string,
  "street": string,
  "city": string,
  "state": string,
}
````
_______________________________________________________________________________________________________________________________________________________________________

### 🚧 Rotas de Carros

### :lock: Rotas que precisam de autenticação

🟢 **POST - /car**

* Rota para fazer registro de um carro.

**Request:**
````
{
  "brand": string, 
  "model": string,
  "year": string,
  "fuel": string,
  "km": string,
  "color": string,
  "price": number,
  "fipe": number,
  "description": string,
  "is_good_price": bolean,
  "published": bolean,
  "cover_image": string
}`
````
	
**Response:** 
````
{
  "id": string,
  "brand": setring,
  "model": string,
  "year": string,
  "fuel": string,
  "km": number,
  "color": string,
  "price": number,
  "fipe": number,
  "description": string,
  "is_good_price": bolean,
  "published": bolean,
  "cover_image": string,
  "user": {
    "id": string
  }
}
````

🔵 **GET - user/cars**

* Lista apenas os carros criados pelo usuário

**Response:** 
````
[
  {
    "id": string,
    "brand": setring,
    "model": string,
    "year": string,
    "fuel": string,
    "km": number,
    "color": string,
    "price": number,
    "fipe": number,
    "description": string,
    "is_good_price": bolean,
    "published": bolean,
    "cover_image": string,
    "user": {
      "id": string
    }
  }
]
````

🔵 **GET - /cars**

* Lista todos os carros criados

**Response:** 
````
[
  {
    "id": string,
    "brand": setring,
    "model": string,
    "year": string,
    "fuel": string,
    "km": number,
    "color": string,
    "price": number,
    "fipe": number,
    "description": string,
    "is_good_price": bolean,
    "published": bolean,
    "cover_image": string
  }
]
````

🔵 **GET - /car/:id-carro**

* Lista todos os carros criados

**Response:** 
````
 {
  "id": string,
  "brand": setring,
  "model": string,
  "year": string,
  "fuel": string,
  "km": number,
  "color": string,
  "price": number,
  "fipe": number,
  "description": string,
  "is_good_price": bolean,
  "published": bolean,
  "cover_image": string
}

````
🟡 **PATCH - api/car/:id-carro**

 - Atualiza dados do carro, mas apenas o usuário que criou pode editar. 

**Request:**

````
{
  "brand"?: setring,
  "model"?: string,
  "year"?: string,
  "fuel"?: string,
  "km"?: number,
  "color"?: string,
  "price"?: number,
  "fipe"?: number,
  "description"?: string,
  "is_good_price"?: bolean,
  "published"?: bolean,
  "cover_image"?: string
}
````

**Response:** 
````
{
  "id": string,
  "brand": setring,
  "model": string,
  "year": string,
  "fuel": string,
  "km": number,
  "color": string,
  "price": number,
  "fipe": number,
  "description": string,
  "is_good_price": bolean,
  "published": bolean,
  "cover_image": string
}
````

🔴 **DELETE - /car/:id-carro**

 - Exclui carro, mas apenas o usuário que criou pode excluir.
 
 _______________________________________________________________________________________________________________________________________________________________________



