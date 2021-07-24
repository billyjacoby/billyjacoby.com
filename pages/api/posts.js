export default async function (req, res) {
  const fetchedData = await fetch(process.env.BASE_URL + "posts");
  const response = await fetchedData.json();
  res.json(response);
}
