interface TableProps{
    name: string
}

function Table({name}:TableProps){
    return (
        <p>{name}</p>
    );
}

export default Table;