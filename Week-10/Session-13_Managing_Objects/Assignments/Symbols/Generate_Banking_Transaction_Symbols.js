//Create function which gererazte new TransactionId in every call
function generateTransactionId() {
  let counter = 0;
  return function () {
    counter++;
    return Symbol(`TRANSACTION_ID_${counter}`);
  };
}

const getTransactionId1 = generateTransactionId();
console.log(getTransactionId1());

const getTransactionId2 = generateTransactionId();
console.log(getTransactionId2());

const getTransactionId3 = generateTransactionId();
console.log(getTransactionId3());

/**
 * OutPut
Symbol(TRANSACTION_ID_1)
Symbol(TRANSACTION_ID_1)
Symbol(TRANSACTION_ID_1)
 */