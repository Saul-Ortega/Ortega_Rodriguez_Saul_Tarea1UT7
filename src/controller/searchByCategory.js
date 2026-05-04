export default async function searchByCategory(category) {
    try {
        const res = await fetch(`https://api.bigbookapi.com/search-books?api-key=${import.meta.env.VITE_BIG_BOOK_API}&query=${category}&number=3`);
        const response = await res.json();

        return {
            ...response,
            books: response?.books?.flat() || []
        };
    } catch (error) {
        console.error(error);
        return { books: [] };
    }
}