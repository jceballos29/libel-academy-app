
export const handleTitlePage = (title) => {
  const company = 'Libel Academy';
  let titlePage = '';
  if (title) { titlePage = `${title} | ${company}`; }
  else { titlePage = company; }
  document.title = titlePage;
}