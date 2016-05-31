FORMAT: 1A

# ING Direct DNA project api


### Pay Anyone [/rest/move-money/transfer-payee]
Make a Pay-Anyone or EBA (external bank account) Payment

+ Model (application/json)

    + Schema

            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "definitions":{
                    "TransferBankAccount":{
                        "type": "object",
                        "title": "TransferBankAccount",
                        "properties":{
                            "BSB":{"type": "string"},
                            "AccountNumber":{"type": "string"},
                            "AccountNameDisplay":{"type": "string"},
                            "CurrentBalance": {"type": "number", "required": false},
                            "AvailableBalance": {"type": "number", "required": false}
                        }
                    },
                    "TransferPayeeAccount":{
                        "type": "object",
                        "title": "TransferPayeeAccount",
                        "properties":{
                            "BSB":{"type": "string"},
                            "AccountNumber":{"type": "string"},
                            "AccountNameDisplay":{"type": "string"},
                            "Nickname":{"type": "string"}
                        }
                    },
                    "Frequency":{
                        "type":"object",
                        "title":"Frequency",
                        "properties":{
                            "Code":{
                                "type":"integer"
                            },
                            "Description":{"type":"string"}
                        }
                    },
                    "PaymentSchedule":{
                        "type": "object",
                        "title": "PaymentSchedule",
                        "properties":{
                            "StartDate":{
                                "type": "string",
                                "description": "date of the future payment, or date of the first instance of a series if frequency is specified"
                            },
                            "Frequency":{
                                "title": "Frequency",
                                "$ref":"#/definitions/Frequency",
                                "description": "1 = weekly, 2 = fortnightly, 4 = monthly, 12 = quarterly"
                            },
                            "EndDate":{
                                "type": "string", 
                                "description": "end the recurring payment by this date. ie: no further payments are made after this date. Mutually exclusive with 'Instances' property",
                                "required":false
                            },
                            "Instances":{
                                "type": "integer",
                                "description": "end the recurring payment when this number of payments are made. Mutually exclusive with 'EndDate' property",
                                "required":false
                            }
                        }
                    },
                    "TransferMoneyPayeeResponse":{
                        "type": "object",
                        "title": "TransferMoneyPayeeResponse",
                        "properties":{
                            "TransferFrom": {
                                "title":"TransferFrom",
                                "$ref":"#/definitions/TransferBankAccount"
                            },
                            "TransferTo": {
                                "title":"TransferTo",
                                "$ref": "#/definitions/TransferPayeeAccount"
                            },
                            "Schedule": {
                                "title": "Schedule",
                                "$ref":"#/definitions/PaymentSchedule",
                                "required":false
                            },
                            "Amount": {"type": "number"},
                            "TransactionDate": {
                                "type": "string",
                                "description": "if transaction is a scheduled payment, then this value will be null and payment date will be the start date of the schedule",
                                "required": "false"
                            },
                            "EmailReceipt": {"type": "boolean"},
                            "ReceiptNumber": {"type": "number"},
                            "DisclaimerTextDisplay": {
                                "type": "string",
                                "required":"false"
                            }
                        }
                    },
                    "StatusCode": { 
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
                            "CanComplete": { "type":"boolean" },
                            "ParkedId": {"type":"integer"},
                            "MobileNumber": {"type":"string"}
                        }
                    },
                    "TransferMoneyPayeeServiceResponse":{
                        "type": "object",
                        "title": "TransferMoneyPayeeServiceResponse",
                        "properties":{
                            "Result": {
                                "type": "boolean"
                            },
                            "Response": { 
                                "title":"Response",
                                "$ref":"#/definitions/TransferMoneyPayeeResponse"
                            },
                            "StatusCodes":{
                                "type":"array",
                                "items": {
                                   "$ref":"#/definitions/StatusCode"
                                }
                            },
                            "HighRiskOperation":{
                                "title": "HighRiskOperation",
                                "$ref": "#/definitions/HighRiskOperation"
                            }
                        }                    
                    }
                },
                "$ref":"#/definitions/TransferMoneyPayeeServiceResponse"
            }

    + Body

            {
                "Result": true,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AccountNameDisplay": "my savings account",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118",
                        "AccountNameDisplay": "Sophie"
                    },
                    "Schedule": null,
                    "Amount": 100,
                    "TransactionDate": "2015-02-17T11:29:05+11:00",
                    "ReceiptNumber": "69587",
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes":[]
            }

#### Pay Anyone [POST]

+ Request Pay Anyone {Now} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Schema

            {
                "$schema": "http://json-schema.org/draft-04/schema#",
                "definitions":{
                    "TransferBankAccount":{
                        "type": "object",
                        "title": "TransferBankAccount",
                        "properties":{
                            "BSB":{"type": "string"},
                            "AccountNumber":{"type": "string"}
                        }
                    },
                    "TransferPayeeAccount":{
                        "type": "object",
                        "title": "TransferPayeeAccount",
                        "properties":{
                            "BSB":{"type": "string"},
                            "AccountNumber":{"type": "string"},
                            "AccountNameDisplay":{"type": "string"},
                            "Nickname":{"type": "string", "required": false}
                        }
                    },
                    "Frequency":{
                        "type":"object",
                        "title":"Frequency",
                        "properties":{
                            "Code":{
                                "type":"integer"
                            },
                            "Description":{"type":"string"}
                        }
                    },
                    "PaymentSchedule":{
                        "type": "object",
                        "title": "PaymentSchedule",
                        "properties":{
                            "StartDate":{
                                "type": "string",
                                "description": "date of the future payment, or date of the first instance of a series if frequency is specified"
                            },
                            "Frequency":{
                                "title": "Frequency",
                                "$ref":"#/definitions/Frequency",
                                "description": "1 = weekly, 2 = fortnightly, 4 = monthly, 12 = quarterly"
                            },
                            "EndDate":{
                                "type": "string", 
                                "description": "end the recurring payment by this date. ie: no further payments are made after this date. Mutually exclusive with 'Instances' property",
                                "required":false
                            },
                            "Instances":{
                                "type": "integer",
                                "description": "end the recurring payment when this number of payments are made. Mutually exclusive with 'EndDate' property",
                                "required":false
                            }
                        }
                    },                    
                    "TransferMoneyPayeeServiceRequest":{
                        "type": "object",
                        "title": "TransferMoneyPayeeServiceRequest",
                        "properties":{
                            "TransferFrom": {
                                "title":"TransferFrom",
                                "$ref":"#/definitions/TransferBankAccount"
                            },
                            "TransferTo": {
                                "title":"TransferTo",
                                "$ref":"#/definitions/TransferPayeeAccount"
                            },
                            "Schedule": {
                                "title": "Schedule",
                                "$ref":"#/definitions/PaymentSchedule",
                                "required":false
                            },
                            "Amount" : {"type": "number"},
                            "DescriptionIWillSee": {"type": "string"},
                            "DescriptionTheyWillSee": {"type": "string"},
                            "EmailReceipt": {"type": "boolean"},
                            "PaymentId": {"type": "integer"},
                            "SavePayee": {"type": "boolean", "required": false}
                        }
                    }
                },
                "$ref":"#/definitions/TransferMoneyPayeeServiceRequest"
            }

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": null,
                "Amount":100,
                "DescriptionIWillSee": "my description",
                "DescriptionTheyWillSee": "their description",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200

    [Pay Anyone][]

+ Request Pay Anyone {Now, High Risk, Temporary Limit} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": null,
                "Amount":100,
                "DescriptionIWillSee": "Two Factor",
                "DescriptionTheyWillSee": "Temp Limit",
                "EmailReceipt": false,
                "PaymentId": 0,
                "SavePayee": false
            }

+ Response 200

    {
        "Result": false,
        "StatusCodes" : [
            {
                "Code":99999,
                "Description":"Two Factor Required."
            }
        ],
        "HighRiskOperation":{
            "ParkedId": 12345,
            "MobileNumber": "456"
        }
    }


+ Request Pay Anyone With New Payee {Now, High Risk, Dont Save} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

        {
            "TransferFrom": {
                "BSB": "923100",
                "AccountNumber": "0022429659"
            },
            "TransferTo": {
                "BSB": "064000",
                "AccountNumber": "111111",
                "AccountNameDisplay": "Two Factor",
                "Nickname": ""
            },
            "Schedule": null,
            "Amount":100,
            "EmailReceipt": false,
            "PaymentId": 100,
            "SavePayee": false
        }

+ Response 200

        {
            "Result": false,
            "StatusCodes" : [
                {
                    "Code":99999,
                    "Description":"Two Factor Required."
                }
            ],
            "HighRiskOperation":{
                "ParkedId": 12345,
                "MobileNumber": "456"
            }
        }

+ Request Pay Anyone With New Payee {Now, High Risk, Dont Save, Nickname} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

        {
            "TransferFrom": {
                "BSB": "923100",
                "AccountNumber": "0022429659"
            },
            "TransferTo": {
                "BSB": "064000",
                "AccountNumber": "111111",
                "AccountNameDisplay": "Two Factor",
                "Nickname": "TwoFactorNickName"
            },
            "Schedule": null,
            "Amount":100,
            "EmailReceipt": false,
            "PaymentId": 100,
            "SavePayee": false
        }

+ Response 200

        {
            "Result": false,
            "StatusCodes" : [
                {
                    "Code":99999,
                    "Description":"Two Factor Required."
                }
            ],
            "HighRiskOperation":{
                "ParkedId": 12345,
                "MobileNumber": "456"
            }
        }

+ Request Pay Anyone With New Payee {Now, High Risk, Save to Addressbook} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

        {
            "TransferFrom": {
                "BSB": "923100",
                "AccountNumber": "0022429659"
            },
            "TransferTo": {
                "BSB": "064000",
                "AccountNumber": "111111",
                "AccountNameDisplay": "Two Factor",
                "Nickname": ""
            },
            "Schedule": null,
            "Amount":100,
            "EmailReceipt": false,
            "PaymentId": 100,
            "SavePayee": true
        }

+ Response 200

        {
            "Result": false,
            "StatusCodes" : [
                {
                    "Code":99999,
                    "Description":"Two Factor Required."
                }
            ],
            "HighRiskOperation":{
                "ParkedId": 12345,
                "MobileNumber": "456"
            }
        }

+ Request Pay Anyone {Funds Error} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": null,
                "Amount": 100,
                "DescriptionIWillSee": "funds error",
                "DescriptionTheyWillSee": "funds error",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": false,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": null,
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes": [{"Code": 20230, "Description": "Sorry, insufficient funds in this account."}]
            }


+ Request Pay Anyone {Funds Error, Pay later} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": {
                    "StartDate": "2015-04-01T01:00:00+11:00",
                    "Frequency": null
                },
                "Amount": 100,
                "DescriptionIWillSee": "funds error",
                "DescriptionTheyWillSee": "funds error",
                "EmailReceipt": false,
                "PaymentId": 100
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": false,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": {
                        "StartDate": "2015-04-01T01:00:00+11:00",
                        "Frequency": null
                    },
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes": [{"Code": 1, "Description": "The amount entered isn't accepted by this Biller."}]
            }

+ Request Pay Anyone {To account closed} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": null,
                "Amount": 100,
                "DescriptionIWillSee": "to account closed",
                "DescriptionTheyWillSee": "to account closed",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": false,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": null,
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes": [{"Code": 10016, "Description": "Please select an account to transfer money to"}]
            }
            
+ Request Pay Anyone {Account Error} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": {
                    "StartDate": "2015-04-01T01:00:00+11:00",
                    "Frequency": null
                },
                "Amount": 100,
                "DescriptionIWillSee": "account error",
                "DescriptionTheyWillSee": "account error",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false,
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": false,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": null,
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes": [{"Code": 10016, "Description": "Please select an account to transfer money to"}]
            }


+ Request Pay Anyone {Account Error, Pay later} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": null,
                "Amount": 100,
                "DescriptionIWillSee": "account error",
                "DescriptionTheyWillSee": "account error",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": false,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": {
                        "StartDate": "2015-04-01T01:00:00+11:00",
                        "Frequency": null
                    },
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes": [{"Code": 10016, "Description": "Please select an account to transfer money to"}]
            }


+ Request Pay Anyone {Scheduled} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": {
                    "StartDate": "2015-12-01T00:00:00+11:00"
                },
                "Amount":100,
                "DescriptionIWillSee": "my description",
                "DescriptionTheyWillSee": "their description",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": true,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "064000",
                        "AccountNumber": "01234567"
                    },
                    "Schedule": {
                        "StartDate": "2015-08-01T01:00:00+11:00",
                        "Frequency": null
                    },
                    "Amount": 100,
                    "TransactionDate": "2015-04-28T01:00:00+10:00",
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes":[]
            }

+ Request Pay Anyone {Scheduled, High Risk} (application/json)

    + Headers

        X-AuthToken: sample_encrypted_token

    + Body

        {
            "TransferFrom": {
                "BSB": "923100",
                "AccountNumber": "0022429659"
            },
            "TransferTo": {
                "BSB": "064000",
                "AccountNumber": "01234567",
                "AccountNameDisplay": "Payee 1",
                "Nickname": "Tiffany"
            },
            "Schedule": {
                "StartDate": "2015-12-01T00:00:00+11:00",
                "Frequency": null
            },
            "Amount":100,
            "DescriptionIWillSee": "pay later HRT",            
            "EmailReceipt": false,
            "PaymentId": 100,
            "SavePayee": false
        }

+ Response 200

    {
        "Result": false,
        "StatusCodes" : [
            {
                "Code":99999,
                "Description":"Two Factor Required."
            }
        ],
        "HighRiskOperation":{
            "ParkedId": 12345,
            "MobileNumber": "456"
        }
    }


+ Request Pay Anyone {Recurring, Date} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": {
                    "StartDate": "2015-09-01T00:00:00+10:00",
                    "Frequency": {
                        "Code": 3,
                        "Description": "Fortnightly"
                    },
                    "EndDate": "2016-08-14T00:00:00+10:00"
                },
                "Amount":100,
                "DescriptionIWillSee": "my description",
                "DescriptionTheyWillSee": "their description",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": true,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": {
                        "StartDate": "2015-04-01T01:00:00+11:00",
                        "Frequency": {
                            "Code": 1,
                            "Description": "Weekly"
                        },
                        "EndDate": "2016-06-01T01:00:00+11:00"
                    },
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes":[]
            }

+ Request Pay Anyone {Recurring, NoEndDate} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": {
                    "StartDate": "2015-09-01T00:00:00+10:00",
                    "Frequency": {
                        "Code": 3,
                        "Description": "Fortnightly"
                    },
                    "EndDate": null
                },
                "Amount":100,
                "DescriptionIWillSee": "my description",
                "DescriptionTheyWillSee": "their description",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": true,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvailableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": {
                        "StartDate": "2015-04-01T01:00:00+11:00",
                        "Frequency": {
                            "Code": 1,
                            "Description": "Weekly"
                        },
                        "EndDate": "2016-06-01T01:00:00+11:00"
                    },
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes":[]
            }


+ Request Pay Anyone {Recurring, Instances} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1",
                    "Nickname": "Tiffany"
                },
                "Schedule": {
                    "StartDate": "2015-11-01T00:00:00+11:00",
                    "Frequency": {
                        "Code": 3,
                        "Description": "Fortnightly"
                    },
                    "Instances": "4"
                },
                "Amount":100,
                "DescriptionIWillSee": "my description",
                "DescriptionTheyWillSee": "their description",
                "EmailReceipt": false,
                "PaymentId": 100,
                "SavePayee": false
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": true,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvaliableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": {
                        "StartDate": "2015-04-01T01:00:00+11:00",
                        "Frequency": {
                            "Code": 1,
                            "Description": "Weekly"
                        },
                        "Instances": 4
                    },
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes":[]
            }

+ Request Pay Anyone {Now with save payee failed} (application/json)

    + Headers

        X-AuthToken: sample_encrypted_token

    + Body

        {
            "TransferFrom": {
                "BSB": "923100",
                "AccountNumber": "0022429659"
            },
            "TransferTo": {
                "BSB": "064000",
                "AccountNumber": "01234567",
                "AccountNameDisplay": "Payee 1",
                "Nickname": "Tiffany"
            },
            "Schedule": null,
            "Amount":100,
            "DescriptionIWillSee": "save payee fails",
            "DescriptionTheyWillSee": "save payee fails",
            "EmailReceipt": false,
            "PaymentId": 100,
            "SavePayee": true
        }

+ Response 200 (application/json)

    + Body
    
        {
            "Result": true,
            "Response": {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659",
                    "AccountNameDisplay": "my savings account",
                    "AvailableBalance": 9972.36,
                    "CurrentBalance": 9985.11
                },
                "TransferTo": {
                    "BSB": "064000",
                    "AccountNumber": "01234567",
                    "AccountNameDisplay": "Payee 1"
                },
                "Schedule": null,
                "Amount": 100,
                "TransactionDate": "2015-02-17T11:29:05+11:00",
                "ReceiptNumber": "69587",
                "DisclaimerTextDisplay": null
            },
            "StatusCodes":[{"Code": 20740, "Description": "This did not save to your address book" }]
        }

+ Request Pay Anyone {Recurring, Instances} (application/json)

    + Headers

            X-AuthToken: sample_encrypted_token

    + Body

            {
                "TransferFrom": {
                    "BSB": "923100",
                    "AccountNumber": "0022429659"
                },
                "TransferTo": {
                    "BSB": "3456",
                    "AccountNumber": "0022429659",
                    "AccountNameDisplay": "ING Direct",
                    "Nickname": "ING Direct"
                },
                "Schedule": {
                    "StartDate": ""2015-08-18T00:00:00+00:00""
                },
                "Amount":100,
                "DescriptionIWillSee": "This is every month transactions",
                "DescriptionTheyWillSee": "Other description",
                "EmailReceipt": false,
                "PaymentId": 23,
                "SavePayee": true
            }

+ Response 200 (application/json)

    + Body

            {
                "Result": true,
                "Response": {
                    "TransferFrom": {
                        "BSB": "923100",
                        "AccountNumber": "0022429659",
                        "AvaliableBalance": 9972.36,
                        "CurrentBalance": 9985.11
                    },
                    "TransferTo": {
                        "BSB": "923100",
                        "AccountNumber": "0030000118"
                    },
                    "Schedule": {
                        "StartDate": "2015-04-01T01:00:00+11:00",
                        "Frequency": {
                            "Code": 1,
                            "Description": "Weekly"
                        },
                        "Instances": 4
                    },
                    "Amount": 100,
                    "TransactionDate": null,
                    "ReceiptNumber": null,
                    "DisclaimerTextDisplay": null
                },
                "StatusCodes":[]
            }
