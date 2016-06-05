FORMAT: 1A

# InboxApi

Some API Calls, for using the Inbox Data

# Group Inbox

## URL [/api/inbox/bills]

### Get all Inbox Data [GET]

+ Response 200 (application/json)

    [
      {
          "title": "May 2nd",
          "items":[
              {
                  "name":"Water monthly"
              },
              {
                  "name":"Council rates"
              },
              {
                "name":"Strata"
              }
          ]
      },
      {
          "title": "May 1st",
          "items":[
              {
                  "name":"Home phone"
              },
              {
                  "name":"Wife phone"
              }]
      },
      {
          "title": "April 30th",
          "items":[
              {
                  "name":"Internet"
              },
              {
                  "name":"Mobile phone"
              }]
      }
    ]
