export const getImageUrl = (
  path,
  size = "w500",
  defaultImage = "route/to/default/image.jpg"
) => {
  return path ? `https://image.tmdb.org/t/p/${size}${path}` : defaultImage;
};
