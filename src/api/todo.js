module.exports.handler = (evt, ctx, done) => {
  const todos = [
    { id: 1, name: "clean up", completed: false },
    { id: 2, name: "cook", completed: true },
  ];
  const paramId = evt.pathParameters.id && parseInt(evt.pathParameters.id, 10);
  const todo = todos.find((item) => paramId === item.id);

  const data = todo ?? {
    message: "Failed to retrieve todo",
  };

  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data,
    }),
  });
};
