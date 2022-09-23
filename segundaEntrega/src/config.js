export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://fbarbero32065:Liceonaval98@cluster0.aqcu7ce.mongodb.net/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "fbcoderhouse32065",
        "private_key_id": "1611ff18969f192be4df44de5f2822fe93591e97",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCz+7Ok1zYlwziT\nPpoV6n51XXCpyr0UsmVeaDjEar2raGlFf90A4iBpbDoueRJONZ5qh1DYaDTTZab8\n/+aVJ5DG8yapWNzPclbNqSwt0wPiwDCquewe5BKIquZmcSBI0Fq+3T6A9GtBukQq\nZIPaYG9YsVW0A+XxMy+MfvZF/kZbCwjDMrG12KH6har7EBr30JTRaXH+WxBiPLkG\nrV4DyCQ4Z0qkQcjOkY1umY7GQRjKAyo7TbPE0gYEurx2pHd4f2OSwXcWssAs2UB1\npCwz0ztntJLSh6EHrH76iS1ZHJl0jAi/Tl6ylNNwdb2nxohIsQvk1p+bVH481si1\nmjFjKBWvAgMBAAECggEASENR8Gg8JFNKfswOv6fj2CmJF5L/8bRiwNHloO8echi8\n05uv1y/zRYCfp5MSx3X9wdXMnubP9uSEdGYmZVJ6bXao2iuElIHa2j4HL+reT4dM\nwu9dH1YBHwBG+3CGPtXw6VsZQltgSQaJYd/zlJVNf3XL7Df4daxQdf9vz9B03Q5X\nl5+DyMjIrm2gxbyWefK5CeypLIEAWIf0199RZ/hzjvYP7HXwf3Zc4f3D4z1GIusc\nXBwkfxkkfCHit+Dqk6NkvyoVJzYY+f4RPoJY24HP7R2+cOUACIuSmvmMKAAH+SXd\nzzuwZEXJ1NwsoVxysNatnVKK6FMtfn24vm9pZ3hiyQKBgQDfcBJHApwtUSeRDqHL\nwkIBt7FsaY81Rvykf4MHpai6FZvnzWVONg3tJeeU6YgzP3oyCBmVlOmuFY2ZTLp+\n7VTxB405euiyMKhzOSDSa8WnUDIu8KC/FNLve3Je9xSSzEHq2huUhxLqzrwbMP1D\nF96TO8EcUE4YHUYHHDBm8Zc2BQKBgQDONnHEWapIPxql30OWUEBfbtnMz4xYooyL\n9pck5wfxagFEPwMJEtG1PKJ4GKlHJBOCG1zReypH/FiHwSVDz83uKkZ/u+IGbzxq\ndi5YN2yqcyj3GI4nkHRKIgKMj4q8XWCmThoIciNy04mn762rI3Du8i+6+T3vGf+T\nzZ4icaBXIwKBgFm/VlgXgEvjkRT+35ZMjN7LvgRh0hgAT3JzlVn4/HDiRSEyq0Jj\nC+z5kK+Lrh2HnbmC72PZ0JMQLTQqUa6x/bBi7CLub5FDYiYGCFz81QODfuTD2o1l\n++Qdna7vZ+AfE0sWGIXsS3jtWTlC0Dem2swg8ExDJVsiRwKMHBT9bVNRAoGAFwkb\n8lw12nY6Ktdi/HKgjkiayfdRbUFTQ/ta7QNl7sDxvUbwtt3EUWOhnpraphjQmRMn\nbjs9AOeemCOqXwXisj1EvNYnLKLWc+oZyT7/w5azt86laqQHaZSdBkiurdYcitdk\nrxbZAOXCleD/XIPMBNVHIbLgCUq1MzSf+qcIy1MCgYEAlfbFOZemuzC/k/3QdI3K\n4dE06oUM92qTOuouZuc58H0aBs6aEKnVBnbDJF+JbbAfpqHhSW/rw0W8Apndpn5H\nUtAMfgiT3jyH4aSHL6MllqS0DCWwsOm7LVZA5rrLWKUSPOxxegMVqaDnpTWLhdzo\n0vE7ZKxisbl9RKx4zfjE1s8=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-7qabf@fbcoderhouse32065.iam.gserviceaccount.com",
        "client_id": "113100346658059919642",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7qabf%40fbcoderhouse32065.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    }
}