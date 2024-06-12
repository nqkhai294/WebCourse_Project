// server/routes/task.js
module.exports = {
    type: 'admin',
    routes: [
      {
        method: 'GET',
        path: '/count',
        handler: 'task.count',
        config: {
          policies: [],
          auth: false,
        },
      },
      // ...
    ],
  };