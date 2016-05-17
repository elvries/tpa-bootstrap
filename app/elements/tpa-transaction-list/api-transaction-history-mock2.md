FORMAT: 1A

# ING Direct DNA project api

## Transaction History [/rest/transaction/history]
Small modification is required to the existing SOA GetTransactionHistory service in order to cover two cases:
- return the transaction history for all accounts when the account number is not provided.
- return the transaction history for the given account.

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
                            "TransactionId": {"type": "integer"},
                            "Amount": {"type": "number"},
                            "ExtendedDescription": {"type": "string", "AntiXSS":false},
                            "TransactionDetails": {"type": "string", "AntiXSS":false},
                            "Balance": {"type": "number"},
                            "ReceiptNumber": {"type": "string"},
                            "Repeatable": {"type": "boolean"},
                            "TransactionCode": {"type": "string"},
                            "TransactionDate": {"type": "string"},
                            "TransactionType": {"type": "integer"},
                            "AccountName": {"type": "string", "AntiXSS":false}
                        }
                    },
                    "TransactionHistoryEntryResponse":{
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
                    "StatusCode":{
                        "type": "object",
                        "title": "StatusCode",
                        "properties":{
                            "Code": {
                                "type": "integer",
                                "description": "InvalidData = 20270 ect..."
                            },
                            "Description": {"type": "string", "AntiXSS":false}
                        }
                    },
                    "HighRiskOperation":{
                        "type": "object",
                        "title": "HighRiskOperation",
                        "properties":{
                            "ParkedId": {"type":"integer"},
                            "MobileNumber": {"type":"string"}
                        }
                    },
                    "GetTransactionHistoryResponse":{
                        "type": "object",
                        "title":"GetTransactionHistoryResponse",
                        "properties": {
                            "Result": {"type":"boolean"},
                            "Response": {
                                "title":"Response",
                                "$ref": "#/definitions/TransactionHistoryEntryResponse"
                            },
                            "StatusCodes": {
                                "type":"array",
                                "items":{
                                    "$ref": "#/definitions/StatusCode"
                                }
                            },
                            "HighRiskOperation":{
                                "title": "HighRiskOperation",
                                "$ref": "#/definitions/HighRiskOperation"
                            }
                        }
                    }
                },
                "$ref":"#/definitions/GetTransactionHistoryResponse"
            }

    + Body

            {
                "Result": 0,
                "Response": {
                    "TotalTransactionsCount": 50,
                    "Transactions": [{
                        "Amount": 0.02,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -20,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Some Stuff",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 120,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Deposit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -88,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Myer",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T12:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 0.02,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -20,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Some Stuff",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 120,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Deposit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -88,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Myer",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T12:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 0.02,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -20,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Some Stuff",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 120,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Deposit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -88,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Myer",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T12:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 0.02,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -20,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Some Stuff",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 120,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Deposit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -88,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Myer",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T12:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 0.02,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -20,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Some Stuff",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 120,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Deposit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -88,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Myer",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T12:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 0.02,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -20,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Some Stuff",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 120,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Deposit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T00:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": -88,
                        "ExtendedDescription": "",
                        "TransactionDetails": "Myer",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-29T12:00:00+11:00",
                        "TransactionType": 0
                    }, {
                        "Amount": 0.02,
                        "ExtendedDescription": "Secret Agent Man",
                        "TransactionDetails": "Interest Credit",
                        "TransactionId": 214476258,
                        "Balance": 0.02,
                        "ReceiptNumber": "941605",
                        "Repeatable": false,
                        "TransactionCode": "00730",
                        "TransactionDate": "2012-11-30T00:00:00+11:00",
                        "TransactionType": 0
                    }]
                }
            }

### Transaction History[POST]

+ Request Schema (application/json)

    + Headers

            X-Ignore: Ignore

    + Schema
            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "definitions":{
                    "Filter": {
                        "type": "object",
                        "title": "Filter",
                        "properties": {
                            "StartDate": { "type": "string"},
                            "EndDate": { "type": "string"},
                            "MinValue": { "type": "string"},
                            "MaxValue": { "type": "string"},
                            "ExpenseTransactions": {"type":"boolean"},
                            "IncomeTransactions": {"type":"boolean"}
                        }
                    },
                    "TransactionHistoryRequest":{
                        "type": "object",
                        "title":"TransactionHistoryRequest",
                        "properties":{
                            "AccountNumber": {"type": "string"},
                            "SearchQuery": {"type":"string"},
                            "PageSize": {"type": "integer"},
                            "PageNumber": {"type": "integer"}, 
                             "Filter": {
                                   "title":"Filter",
                                   "$ref": "#/definitions/Filter"
                             }
                        }
                    }
                },
                "title" : "TransactionHistoryRequest",
                "type": "object",
                "$ref": "#/definitions/TransactionHistoryRequest"
            }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Orange Everyday (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "0030000118", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Saver Maximiser (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]
    
+ Request Saver Maximiser (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "", "PageNumber": 0, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Savings Accelerator (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902012", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Term Deposit (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "22222222", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Home Loan (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "26459116", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Business Term Deposit (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "26459114", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]

+ Request Business Optimiser (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "26464356", "SearchQuery": "", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    [Transaction History][]
    
+ Request Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "my search", "PageNumber": 0, "PageSize": 25 }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }

+ Request Search Business Optimiser (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "26464356", "SearchQuery": "my search", "PageNumber": 0, "PageSize": 25 }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Search load more (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "my search", "PageNumber": 1, "PageSize": 25 }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Search no result (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "no result", "PageNumber": 0, "PageSize": 25 }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 0,
            "Transactions": []
        }
    }

+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "my search", "PageNumber": 0, "PageSize": 25, "Filter": { "StartDate":"2014-07-01T00:00:00+10:00", "EndDate":"2015-06-30T23:59:59+10:00", "ExpenseTransactions": true, "IncomeTransactions": true, "MaxValue": "20", "MinValue": "10"  } }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 3,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }

    
+ Request Search load more (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "my search", "PageNumber": 1, "PageSize": 25, "Filter": { "StartDate":"2014-07-01T00:00:00+10:00", "EndDate":"2015-06-30T23:59:59+10:00", "ExpenseTransactions": true, "IncomeTransactions": true, "MaxValue": "20", "MinValue": "10"  } }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 3,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }
            ]
        }
    }

+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "", 
                "PageNumber": 0, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-07-01T00:00:00+10:00", 
                            "EndDate":"2015-06-30T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 3,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "my search", 
                "PageNumber": 0, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-07-01T00:00:00+10:00", 
                            "EndDate":"2015-06-30T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 3,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Filter Search no result (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            { "AccountNumber" : "18902002", "SearchQuery": "my search", "PageNumber": 0, "PageSize": 25, "Filter": { "StartDate":"2015-07-01T00:00:00+10:00", "EndDate":"2015-08-15T23:59:59+10:00", "ExpenseTransactions": true, "IncomeTransactions": true, "MaxValue": "20", "MinValue": "10"  } }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 0,
            "Transactions": []
        }
    }
    
+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "my search", 
                "PageNumber": 0, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-07-01T00:00:00+10:00", 
                            "EndDate":"2015-06-30T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 3,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "my search", 
                "PageNumber": 1, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-09-26T00:00:00+10:00", 
                            "EndDate":"2015-09-26T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "my search", 
                "PageNumber": 0, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-09-26T00:00:00+10:00", 
                            "EndDate":"2015-09-26T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "", 
                "PageNumber": 0, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-09-26T00:00:00+10:00", 
                            "EndDate":"2015-09-26T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
    
+ Request Filter Search (application/json)

    + Headers

            X-AuthToken: PEFzc2VydGlvbj48QXR0cmlidXRlIE5hbWU9J2h0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSc+PEF0dHJpYnV0ZVZhbHVlPlB1YmxpYzwvQXR0cmlidXRlVmFsdWU+PEF0dHJpYnV0ZVZhbHVlPkxvd1Jpc2s8L0F0dHJpYnV0ZVZhbHVlPjxBdHRyaWJ1dGVWYWx1ZT5NZWRpdW1SaXNrPC9BdHRyaWJ1dGVWYWx1ZT48L0F0dHJpYnV0ZT48L0Fzc2VydGlvbj4=

    + Body

            {   
                "AccountNumber" : "18902002", 
                "SearchQuery": "no result", 
                "PageNumber": 0, 
                "PageSize": 25, 
                "Filter": { 
                            "StartDate":"2014-09-26T00:00:00+10:00", 
                            "EndDate":"2015-09-26T23:59:59+10:00", 
                            "ExpenseTransactions": true, "IncomeTransactions": true
                } 
            }

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }

+ Request Filter Search (application/json)

    + Body

+ Response 200 (application/json)

    {
        "Result": 0,
        "Response": {
            "TotalTransactionsCount": 4,
            "Transactions": [{
                "Amount": 0.02,
                "ExtendedDescription": "",
                "TransactionDetails": "Interest Credit",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber":    "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }, {
                "Amount": -20,
                "ExtendedDescription": "",
                "TransactionDetails": "Some Stuff",
                "TransactionId": 214476258,
                "Balance": 0.02,
                "ReceiptNumber": "941605",
                "Repeatable": false,
                "TransactionCode": "00730",
                "TransactionDate": "2012-11-30T00:00:00+11:00",
                "TransactionType": 0
            }]
        }
    }
