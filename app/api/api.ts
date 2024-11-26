export default async function getCoffe() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching coffee data:', error);
    return []; // Retorna un arreglo vacío en caso de error
  }
}