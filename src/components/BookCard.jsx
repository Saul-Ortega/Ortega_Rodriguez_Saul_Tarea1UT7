export default function BookCard({book}) {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
                <div style={{marginTop: 10}}>Título: {book?.title || "Sin Título"}</div>
                <img src={book?.image || ""} alt={book?.title || "No hay imagen"} style={{ width: 180, marginTop: 10  }} />
                <div style={{ marginTop: 10 }}>Autor/es: {book?.authors?.map((author) => <span key={author.id || author.name}>{author.name} </span>) || "Sin autor/es"}</div>
                <div style={{ marginTop: 10 }}>Puntuación: {Math.round(book?.rating?.average) || "No hay puntuación"}</div>
            </div>
        </>
    );
}