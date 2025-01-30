import { fetchPlaceholders } from '../../scripts/aem.js';

export default async function decorate() {
  const placeholders = await fetchPlaceholders();
  const clickMe = placeholders.ClickHere;
  console.log(clickMe);
}
