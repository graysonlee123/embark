export default function Search() {
  return (
    <form method="GET" action="https://google.com/search">
      <label for="search">Search...</label>
      <input id="search" type="text" name="q" />
    </form>
  )
}
