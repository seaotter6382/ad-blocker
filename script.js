const ads = [ // heres the list of ads
  'tag_here',
  'tag_here',
  'adservice.google.com',
];

ads.forEach(selector => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    element.remove(); //remove all of the ads in the list
  });
});

