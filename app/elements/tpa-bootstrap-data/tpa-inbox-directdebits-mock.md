FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/directdebits]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Pay TV Monthly"
              },
              {
                  "name":"Loan Repay"
              },
              {
                "name":"Phone"
              },
              {
                  "name":"Phone"
              },
              {
                  "name":"Loan Repay"
              },
              {
                  "name":"Water 2"
              },
              {
                "name":"Water 1"
              },
              {
                "name":"Gas 2"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"TV 3"
              },
              {
                  "name":"Electricity 4"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Water 5"
              },
              {
                  "name":"Phone 6"
              }]
      }
    ]
