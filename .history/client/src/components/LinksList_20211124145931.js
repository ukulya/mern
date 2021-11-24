export const LinksList = ({links}) => {
    if(!links.length) return <p>Ссылок пока нет</p>

    return(
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Оригинальная</th>
      <th scope="col">Сокращенная</th>
      <th scope="col">Открыть</th>
    </tr>
  </thead>
  <tbody>
      {links.map((link,index) => {
          return (
          <tr>
          <td>1</tв>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        )
      })}
    
    
  </tbody>
</table>
    )
}