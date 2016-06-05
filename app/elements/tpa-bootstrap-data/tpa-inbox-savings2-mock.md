FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/savings2]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Deposit 1"
              },
              {
                  "name":"Deposit 2"
              },
              {
                "name":"Deposit 1"
              },
              {
                  "name":"Interest 1"
              },
              {
                  "name":"Interest 2"
              },
              {
                "name":"Withdrawal 1"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"Transfer 3"
              },
              {
                  "name":"Transfer 4"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Save 5"
              },
              {
                  "name":"Save 6"
              }]
      }
    ]
