FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/savings1]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Transfer 1"
              },
              {
                  "name":"Transfer 2"
              },
              {
                "name":"Interest 1"
              },
              {
                  "name":"Interest"
              },
              {
                  "name":"Withdrawal 2"
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
              },
              {
                  "name":"Transfer 3"
              },
              {
                  "name":"Transfer 4"
              },
              {
                  "name":"Transfer 3"
              },
              {
                  "name":"Deposit 4"
              },
              {
                  "name":"Deposit 3"
              },
              {
                  "name":"Deposit 4"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Interest"
              },
              {
                  "name":"Save"
              },
              {
                  "name":"Interest"
              },
              {
                  "name":"Save"
              },
              {
                  "name":"Interest"
              },
              {
                  "name":"Save"
              }]
      }
    ]
