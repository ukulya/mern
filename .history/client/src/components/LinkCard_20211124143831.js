export const LinkCard = ({link}) => {
    return(
        <div>
            <h2>ссылка</h2>
            <p>Ваша ссылка: <a href={link.to} target=""></a></p>
        </div>
    )
}