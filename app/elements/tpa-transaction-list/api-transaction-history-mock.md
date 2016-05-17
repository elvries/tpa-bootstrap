FORMAT: 1A

# Polls

Polls is a simple API allowing consumers to view polls and vote in them.

## Questions Collection [/questions]

### List All Questions [GET]

+ Response 200 (application/json)
    
        {
            "transactionGroups": [
                    {
                       "date": "11 Feb", 
                       "accountType": "Saving accounts", 
                       "transactions": [
                            {
                                "name":"Sporting Equipment", 
                                "amount":"10.00", 
                                "icon":"rowing", 
                                "subText":"NL20 INGDB 000131231"
                            },
                            {
                                "name":"transaciton3", 
                                "amount":"1.56", 
                                "icon":"add-shopping-cart", 
                                "subText":"NL20 INGDB 00388881"
                            }
                    ]
                    },
                    {
                       "date": "12 Feb", 
                       "accountType": "Checking accounts", 
                       "transactions": [
                            {
                                "name":"transaciton1", 
                                "amount":"29.30", 
                                "icon":"rowing", 
                                "subText":"NL20 INGDB 0007878798"
                            }
                        ]
                    },
                    {
                       "date": "15 Feb", 
                       "accountType": "Savings", 
                       "transactions": [
                            {
                                "name":"transaciton1", 
                                "amount":"109.06", 
                                "icon":"home", 
                                "subText":"NL20 INGDB 0001123"
                            },
                            {
                                "name":"transaciton2", 
                                "amount":"88.00", 
                                "icon":"card-giftcard", 
                                "subText":"NL20 INGDB 00041244"
                            },
                            {
                                "name":"transaciton3", 
                                "amount":"10.00", 
                                "icon":"perm-phone-msg", 
                                "subText":"NL20 INGDB 0023232231"
                            }
                       ]
                    }
                ]        
            }
