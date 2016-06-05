FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/loan1]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Repayment 1"
              },
              {
                  "name":"Repayment 2"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"Repayment 3"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Repayment 5"
              },
              {
                  "name":"Repayment 6"
              }]
      }
    ]
