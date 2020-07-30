# ARMY Project

## Backend (Node)

### Authentication

> Redirect to /auth/google (do not use axios, just user a tag to redirect the URL)

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
- **Parameters** :
    - id = `Required`
- **Body** : None



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
- **Parameters** :
    - name = `Required`
    - price = `Required`
    - pic = `Required`
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**:

    ```json
    {
      "msg": "Add new album to store successfully."
    }
    ```



#### Error Response

- **Status code** : `500`

    **Response Body** :

    ```json
    {
      "msg": "Fail to add new album to store."
    }
    ```

---

### Get all albums of current user

> Get list of all albums detail of the current user

- **URL** : `/api/albums`
- **Method** : `GET`
- **Auth required** : YES (User)
- **Parameters** : None
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**:

    ```json
    
    ```

    