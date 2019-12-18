exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'XD', content: 'XD' }]
  });
};

exports.postPosts = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // create post in DB
  res.status(201).json({
    message: 'created successfully',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};