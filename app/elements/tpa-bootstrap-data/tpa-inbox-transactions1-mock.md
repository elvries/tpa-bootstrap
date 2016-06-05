FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/transactions1]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Transaction 1"
              },
              {
                  "name":"Transaction 2"
              },
              {
                "name":"Transaction 1"
              },
              {
                  "name":"Transaction 1"
              },
              {
                  "name":"Transaction 2"
              },
              {
                "name":"Transaction 1"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"Transaction 3"
              },
              {
                  "name":"Transaction 4"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Transaction 5"
              },
              {
                  "name":"Transaction 6"
              }]
      }
    ]
