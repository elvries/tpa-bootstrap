FORMAT: 1A

# Transaction History

Polls is a simple API allowing consumers to view polls and vote in them.

## Transaction History [/gettransactions]

+ Model (application/json)

    + Schema

            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "type": "object",
                "title":"GetTransactionHistoryResponse",
                "definitions":{
                    "Transaction":{
                        "type": "object",
                        "title":"Transaction",
                        "properties": {
                            "Name": { "type":"string"},
                            "Amount": { "type":"integer"},
                            "Icon": { "type":"string"},
                            "SubText": { "type":"string"}
                        }
                    },
                    "TransactionGroups":{
                        "type": "object",
                        "title":"TransactionHistoryEntryResponse",
                        "properties": {
                            "Transactions": {
                                "type": "array",
                                "items": {"$ref": "#/definitions/Transaction"}
                            },
                            "TotalTransactionsCount": { "type": "integer" }
                        }
                    },
                    "GetTransactionHistoryResponse":{
                        "type": "object",
                        "title":"GetTransactionHistoryResponse",
                        "properties": {
                            "Result": {"type":"boolean"},
                            "TransactionGroups": {
                                "type": "array",
                                "items": {"$ref": "#/definitions/TransactionGroups"}
                            }
                        }
                    }
                },
                "$ref":"#/definitions/GetTransactionHistoryResponse"
            }
            
        
### Transaction History[GET]

+ Request Schema (application/json)

    + Headers

    + Schema
            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "definitions":{
                    "TransactionHistoryRequest":{
                        "type": "object",
                        "title":"TransactionHistoryRequest",
                        "properties":{
                            "AccountNumber": {"type": "string"},
                            "PageSize": {"type": "integer"},
                            "PageNumber": {"type": "integer"}
                        }
                    }
                },
                "title" : "TransactionHistoryRequest",
                "type": "object",
                "$ref": "#/definitions/TransactionHistoryRequest"
            }

+ Response 200 (application/json)
    
    + Body
    
        {
            "transactionGroups": [
<<<<<<< Updated upstream
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
    
=======
                   {
                       date: '11 Feb', accountType: "Saving accounts", transactions: [
                       {name:"Sporting Equipment", amount:"10.00", icon:"rowing", subText:"NL20 INGDB 000131231"},
                       {name:"transaciton3", amount:"1.56", icon:"add-shopping-cart", subText:"NL20 INGDB 00388881"}
                   ]
                   },
               {
                   date: '12 Feb', accountType: "Checking accounts", transactions: [
                   {name:"transaciton1", amount:"29.30", icon:"rowing", subText:"NL20 INGDB 0007878798"}
               ]
               },
               {
                   date: '15 Feb', accountType: "Savings", transactions: [
                   {name:"transaciton1", amount:"109.06", icon:"home", subText:"NL20 INGDB 0001123"},
                   {name:"transacit    on2", amount:"88.00", icon:"card-giftcard", subText:"NL20 INGDB 00041244"},
                   {name:"transaciton3", amount:"10.00", icon:"perm-phone-msg", subText:"NL20 INGDB 0023232231"}
               ]
               }
           ]
        }
>>>>>>> Stashed changes
