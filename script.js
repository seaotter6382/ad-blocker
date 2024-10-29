const ads = [
  'tag_here',
  'tag_here',
];

ads.forEach(selector => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.remove();
  });
});

