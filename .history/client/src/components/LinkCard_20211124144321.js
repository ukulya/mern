export const LinkCard = ({link}) => {
    return(
        <div>
            <h2>ссылка</h2>
            <p>Ваша ссылка: <a href={link.to} target="_blank" rel="noopener noreferrer">{link.to}</a></p>
            <p>Откуда: <a href={link.from} target="_blank" ref="noopener noreferrer">{link.from}</a></p>
            <p>КОЛ-Во кликов по ссылке: <strong>{link.clicks}</strong></p>
            <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </div>
    )
}