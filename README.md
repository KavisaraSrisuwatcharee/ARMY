# ARMY Project

## Backend (Node)

#### *Note

I have create the proxy setting on frontend side, so when you make a request to backend (http://localhost:5000) you don't have to specify http://localhost:5000 in request becuase when you make a request to `/api` or `/auth/google` the target of request will point to http://localhost:5000 automatically. For example, if you wan to make a request to `http://localhost:5000/api/current_user`  you just make a request to `/api/current_user`.

### Authentication

> Redirect to /auth/google (do not use axios, just use <a> tag to redirect the URL)

- **URL** : `/auth/google`
- **Method** : `GET`
- **Auth required** : No
- **Parameters** : None
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**: None

---



### Get current user 

> Get profile of user

- **URL** : `/api/current_user`
- **Method** : `GET`
- **Auth required** : YES (Admin/User)
- **Parameters** : None
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**: 

    ```json
    {
      "role": <String>,
      "name": <String>,
      "money": <Number>
    }
    ```

***Note**

> role of user can be user or admin

---



### Logout

> Redirect to /api/logout (do not use axios, just user a tag to redirect the URL)

- **URL** : `/api/logout`
- **Method** : `GET`
- **Auth required** : YES (Admin/User)
- **Parameters** : None
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**: None

    

#### Error Response

- **Status code** : `401`

    **Response Body** : None

---



### Get album list from store

> Get all albums detail from store

- **URL** : `/api/albumlist`
- **Method** : `GET`
- **Auth required** : NO
- **Parameters** : None
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**: 

    ```json
    [
      {
        "id": <String>,
        "name": <String>,
        "pic": <String>,
        "lastUpdated": <Date>,
        "oldPrice": <Number>,
        "nowPrice": <Number>
      },
    ]
    ```

    

#### Error Response

- **Status code** : `500`

    **Response Body** : None

---



### Get specific album from store

> Get specific album detail from store

- **URL** : `/api/album`
- **Method** : `GET`
- **Auth required** : NO
- **Parameters** : None
- **Body** :
    - id = `Required`

#### Example (Axios)

```javascript
const body = {id: 'f08bbb80235f21ada30d38a'}
const res = await axios.get('/api/album', body);
```



#### Success Response

- **Status code** : `200`

    **Response Body**:

    ```json
    {
      "id": <String>,
      "name": <String>,
      "pic": <String>,
      "lastUpdated": <Date>,
      "oldPrice": <Number>,
      "nowPrice": <Number>
    }
    ```

    

#### Error Response

- **Status code** : `500`

    **Response Body** : None
    
    

---



### Add new album to store

> Add a new album to store (admin can only do this action)

- **URL** : `/api/albumlist`
- **Method** : `POST`
- **Auth required** : YES (Admin)
- **Parameters** : None
- **Body** :
    - name = `Required`
    - price = `Required`
    - pic = `Required`

#### Example (Axios)

```javascript
const body = {name: 'BTS Tear',
              price: 3000,
              pic: 'https://f.ptcdn.info/645/067/000/q3uawrk5wJz1aakZYWh-o.jpg'}
const res = await axios.post('/api/albumlist', body);
```

#### Success Response

- **Status code** : `201`

    **Response Body**:

    ```json
    {
      "msg": "Add new album to store successfully."
    }
    ```

#### Error Response

- **Status code** : `400`

    **Response Body** :

    ```json
    {
      "msg": "Fail to add new album to store."
    }
    ```


---



### Get all albums of user

> Get all albums of current user

- **URL** : `/api/albums`
- **Method** : `GET`
- **Auth required** : YES (User)
- **Parameters** : None
- **Body** : None

#### Example (Axios)

```javascript
const res = await axios.get('/api/albums');
```

#### Success Response

- **Status code** : `201`

    **Response Body**:

    



### Buy album

> User buy a specific album from store

- **URL** : `/api/albumlist`
- **Method** : `POST`
- **Auth required** : YES (User)
- **Parameters** : None
- **Body** :
    - id = `Required`