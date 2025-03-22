export const createMarkupProducts = data => {
  return data
    .map(({ thumbnail, title, description }) => {
      return `<li>
        <img src="${thumbnail}" alt="${title}">
        <h3>${title}</h3>
        <p>${description}</p>
      </li>`;
    })
    .join('');
};
