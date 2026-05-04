export default async function searchByAuthor(author) {
    try {
        const res = await fetch(`https://api.bigbookapi.com/search-authors?api-key=${import.meta.env.VITE_BIG_BOOK_API}&name=${author}&number=3`);
        const response = await res.json();

        return {
            ...response,
            authors: response?.authors?.flat() || []
        };
    } catch (error) {
        console.error(error);
        return { authors: [] };
    }
}