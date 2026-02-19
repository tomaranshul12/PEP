db.payments.insertMany([
{ studentId: ObjectId("65a100000000000000000001"), courseId: ObjectId("65a300000000000000000001"), amount: 4999, paymentStatus: "Success", transactionId: "TXN2001", createdAt: new Date("2025-01-10") },
{ studentId: ObjectId("65a100000000000000000002"), courseId: ObjectId("65a300000000000000000002"), amount: 2999, paymentStatus: "Success", transactionId: "TXN2002", createdAt: new Date("2025-01-15") },
{ studentId: ObjectId("65a100000000000000000003"), courseId: ObjectId("65a300000000000000000003"), amount: 3999, paymentStatus: "Success", transactionId: "TXN2003", createdAt: new Date("2025-02-05") },
{ studentId: ObjectId("65a100000000000000000004"), courseId: ObjectId("65a300000000000000000004"), amount: 3499, paymentStatus: "Success", transactionId: "TXN2004", createdAt: new Date("2025-02-10") },
{ studentId: ObjectId("65a100000000000000000005"), courseId: ObjectId("65a300000000000000000005"), amount: 1999, paymentStatus: "Success", transactionId: "TXN2005", createdAt: new Date("2025-02-15") },
{ studentId: ObjectId("65a100000000000000000006"), courseId: ObjectId("65a300000000000000000006"), amount: 3999, paymentStatus: "Success", transactionId: "TXN2006", createdAt: new Date("2025-03-01") },
{ studentId: ObjectId("65a100000000000000000001"), courseId: ObjectId("65a300000000000000000007"), amount: 4499, paymentStatus: "Success", transactionId: "TXN2007", createdAt: new Date("2025-03-05") },
{ studentId: ObjectId("65a100000000000000000002"), courseId: ObjectId("65a300000000000000000008"), amount: 4999, paymentStatus: "Success", transactionId: "TXN2008", createdAt: new Date("2025-03-10") },
{ studentId: ObjectId("65a100000000000000000003"), courseId: ObjectId("65a300000000000000000009"), amount: 3799, paymentStatus: "Success", transactionId: "TXN2009", createdAt: new Date("2025-03-15") },
{ studentId: ObjectId("65a100000000000000000004"), courseId: ObjectId("65a300000000000000000010"), amount: 2899, paymentStatus: "Success", transactionId: "TXN2010", createdAt: new Date("2025-03-20") }
])
