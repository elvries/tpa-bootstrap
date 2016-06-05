FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/transfers]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Deposit"
              },
              {
                  "name":"Withdrawal"
              },
              {
                "name":"Deposit"
              },
              {
                  "name":"Deposit"
              },
              {
                  "name":"Withdrawal"
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
              },
              {
                  "name":"Transfer 1"
              },
              {
                  "name":"Transfer 2"
              },
              {
                "name":"Transfer 1"
              },
              {
                "name":"ATM Withdrawal 2"
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
                  "name":"Transaction 4"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"JACK 5"
              },
              {
                  "name":"JACK 6"
              }]
      }
    ]
