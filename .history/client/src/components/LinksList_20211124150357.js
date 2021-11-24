import {Link} from 'react-router-dom';
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
          <tr key={link.}>
          <td>{index + 1}</td>
          <td>{link.from}</td>
          <td>{link.to}</td>
          <td>
              <Link to={`/detail/${link._id}`}>Open</Link>
          </td>
        </tr>
        )
      })}
    
    
  </tbody>
</table>
    )
}