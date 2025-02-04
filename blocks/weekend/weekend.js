import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('places');
  });
  const placeholders = await fetchPlaceholders();
  const clickMe = placeholders.clickHere;
  console.log(clickMe);
}
