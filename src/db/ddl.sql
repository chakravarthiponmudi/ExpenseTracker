CREATE TABLE IF NOT EXISTS accounttype(id INTEGER PRIMARY KEY, accountType TEXT);
CREATE TABLE IF NOT EXISTS account (
    id INTEGER PRIMARY KEY, 
    accountTypeId INTEGER, 
    NAME TEXT,
    FOREIGN KEY (accountTypeId) 
    REFERENCES accounttype (id)  ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE IF NOT EXISTS transactioncategory (
    id INTEGER PRIMARY KEY,
    type TEXT CHECK(type IN ('INCOME', 'EXPENSE')),
    name TEXT UNIQUE,
    description TEXT,
    internal INTEGER
);
CREATE TABLE IF NOT EXISTS transfertransaction (
    id INTERGER PRIMARY KEY,
    fromAccount INTEGER,
    toAccount INTEGER,
    date INTEGER,
    amount REAL,
    description TEXT,
    FOREIGN KEY (fromAccount)
        REFERENCES account (id),
    FOREIGN KEY (toAccount)
        REFERENCES account (id)
);
CREATE TABLE IF NOT EXISTS incomeexpensetransaction (
    id INTERGER PRIMARY KEY,
    account INTEGER,
    transactionCategoryId INTEGER,
    date INTEGER,
    amount REAL,
    description TEXT,
    FOREIGN KEY (account)
        REFERENCES account (id)
    FOREIGN KEY (transactionCategoryId)
        REFERENCES transactioncategory (id)
);