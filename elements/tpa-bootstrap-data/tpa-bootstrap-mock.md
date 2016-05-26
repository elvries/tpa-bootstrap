FORMAT: 1A

# Polls

Polls is a simple API allowing consumers to view polls and vote in them.

## Questions Collection [/api/bootstrap]

### Fetch data for bootstrap [GET]

+ Response 200 (application/json)
    
                {
                  "tabs": [
                    {
                      "label": "Daily Banking",
                      "link": "",
                      "icon": "account-balance-wallet"
                    },
                    {
                      "label": "Saving goals",
                      "link": "savingsgoals",
                      "icon": "tpa:pig"
                    },
                    {
                      "label": "Trading",
                      "link": "trading",
                      "icon": "tpa:wealth-increase"
                    },
                    {
                      "label": "Mortgage",
                      "link": "mortgage",
                      "icon": "tpa:house"
                    },
                    {
                      "label": "Loans",
                      "link": "loans",
                      "icon": "tpa:moneybag"
                    },
                    {
                      "label": "Insurance",
                      "link": "insurance",
                      "icon": "tpa:questionmark"
                    }
                  ]
                }