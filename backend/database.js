/* global use, db */
// MongoDB Playground

// Use the correct database (replace with your actual database name).
use('messageformdb');

// Insert a few documents into the messages collection.
db.getCollection('messages').insertMany([
  { 'name': 'John Doe', 'email': 'john@example.com', 'message': 'This is a test message.', 'date': new Date('2023-09-01T08:00:00Z') },
  { 'name': 'Jane Doe', 'email': 'jane@example.com', 'message': 'Another test message.', 'date': new Date('2023-09-02T09:00:00Z') },
  { 'name': 'Alice Johnson', 'email': 'alice@example.com', 'message': 'Question about your services.', 'date': new Date('2023-09-03T10:00:00Z') },
  { 'name': 'Bob Smith', 'email': 'bob@example.com', 'message': 'Interested in collaborating.', 'date': new Date('2023-09-04T11:00:00Z') },
]);

// Run a find command to view messages sent on a specific date (e.g., September 2nd, 2023).
const messagesOnSeptember2nd = db.getCollection('messages').find({
  date: { $gte: new Date('2023-09-02'), $lt: new Date('2023-09-03') }
}).count();

// Print the result to the output window.
console.log(`${messagesOnSeptember2nd} messages were sent on September 2nd, 2023.`);

// Run an aggregation to group messages by email and count how many messages each user sent.
db.getCollection('messages').aggregate([
  // Match all messages from 2023.
  { $match: { date: { $gte: new Date('2023-01-01'), $lt: new Date('2024-01-01') } } },
  // Group messages by email and count the total for each user.
  { $group: { _id: '$email', totalMessages: { $sum: 1 } } }
]).toArray();
