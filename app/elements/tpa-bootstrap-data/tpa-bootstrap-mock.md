FORMAT: 1A

# Polls

Polls is a simple API allowing consumers to view polls and vote in them.

## Questions Collection [/api/bootstrap]

### Fetch data for bootstrap [GET]

+ Response 200 (application/json)
    
        + Body
            
                {
                    "tabs": [
                        {
                          label: 'Daily Banking',
                          link: '',
                          icon: 'account-balance-wallet'
                        },
                        {
                          label: 'Saving goals',
                          link: 'page-2',
                          icon: 'tpa:pig'
                        },
                        {
                          label: 'Trading',
                          link: 'page-3',
                          icon: 'tpa:wealth-increase'
                        },
                        {
                          label: 'Mortgage',
                          link: 'page-4',
                          icon: 'tpa:house'
                        },
                        {
                          label: 'Loans',
                          link: 'page-5',
                          icon: 'tpa:moneybag'
                        },
                        {
                          label: 'Insurance',
                          link: 'page-5',
                          icon: 'tpa:questionmark'
                        }
                    ];
                }
