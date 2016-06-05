FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/atm]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"ATM Withdrawal"
              },
              {
                  "name":"Cash Out - Supermarket"
              },
              {
                "name":"ATM Withdrawal"
              },
              {
                  "name":"ATM Withdrawal"
              },
              {
                  "name":"Withdrawal"
              },
              {
                "name":"Cash Out Supermarket 1"
              },
              {
                  "name":"Cash Out Supermarket 1"
              },
              {
                  "name":"Cash Out Supermarket 2"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"ATM Withdrawal 3"
              },
              {
                  "name":"ATM Fee"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"ATM Withdrawal"
              },
              {
                  "name":"Cash Out supermarket"
              }]
      }
    ]
