FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/groceries]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Supermarket"
              },
              {
                  "name":"Petrol"
              },
              {
                "name":"Supermarket"
              },
              {
                  "name":"Supermarket"
              },
              {
                  "name":"Petrol"
              },
              {
                "name":"Asian Groceries"
              },
              {
                  "name":"Asian Groceries"
              },
              {
                  "name":"Target"
              },
              {
                "name":"Asian Groceries"
              },
              {
                  "name":"Shop 1"
              },
              {
                  "name":"Shop 2"
              },
              {
                "name":"Shop 1"
              },
              {
                "name":"Supermarket 2"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"Supermarket 3"
              },
              {
                  "name":"Supermarket 4"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Aldi 5"
              },
              {
                  "name":"Aldi 6"
              }]
      }
    ]
