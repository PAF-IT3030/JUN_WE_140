export const isLikedByReqUser = (reqUserId, post) => {
  console.log(post.liked, "issssssssssssssssssssss");
  if (post?.liked === null) {
    return false;
  }
  for (let user of post?.liked) {
    if (reqUserId === user.id) {
      return true;
    }
  }

  return false;
};
