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
- **Auth required** : YES
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
- **Auth required** : YES
- **Parameters** : None
- **Body** : None



#### Success Response

- **Status code** : `200`

    **Response Body**: None

    

#### Error Response

- **Status code** : `401`

    **Response Body** : None

- **Status code** : `500`

    **Response Body** : None

---



### Get album list from store

> Get all albums detail from store

- **URL** : `/api/albumlist`
- **Method** : `GET`
- **Auth required** : YES
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

- **Status code** : `401`

    **Response Body** : None

- **Status code** : `500`

    **Response Body** : None