module.exports.handler = (evt, ctx, done) => {
  const todos = [
    { id: 1, name: "clean up", completed: false },
    { id: 2, name: "cook", completed: true },
  ];
  done(null, {
    statusCode: 200,
    body: JSON.stringify({ data: todos }),
  });
};
