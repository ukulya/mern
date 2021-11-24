export const LinkCard = ({link}) => {
    return(
        <div>
            <h2>ссылка</h2>
            <p>Ваша ссылка: <a href={link.to} target="_blank" ref="noopener noreferrer">{link.to}</a></p>
            <p>Ваша ссылка: <a href={link.from} target="_blank" ref="noopener noreferrer">{link.to}</a></p>
        </div>
    )
}